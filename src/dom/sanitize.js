/** Tags currently allowed. */
glift.dom._sanitizeWhitelist = {
  'br': true,
  'b': true,
  'strong': true,
  'i': true,
  'u': true,
  'em': true,
  'h1': true,
  'h2': true,
  'h3': true
};

/** Characters to escape */
glift.dom._escapeMap = {
 '&': '&amp;',
 '"': '&quot;',
 '\'': '&#x27;',
 '/': '&#x2F;'
};

/**
 * Sanitizes text to prevent XSS. A single pass parser.
 */
glift.dom.sanitize = function(text) {
  var outbuffer = [];
  var strbuff = [];
  var states = { DEFAULT: 1, TAG: 2 };
  var whitelist = glift.dom._sanitizeWhitelist;
  var curstate = states.DEFAULT;
  var numBrackets = 0;
  var lt = '&lt;';
  var gt = '&gt;';
  for (var i = 0, len = text.length; i < len; i++) {
    var chr = text.charAt(i);
    if (chr === '<') {
      curstate = states.TAG;
      numBrackets++;
      if (numBrackets > 1) {
        strbuff.push(lt); 
      }
    } else if (chr === '>') {
      numBrackets--;
      if (numBrackets < 0) {
        curstate = states.DEFAULT;
        numBrackets = 0;
        outbuffer.push(gt);
      } else if (numBrackets > 0) { 
        strbuff.push(gt);
      } else if (numBrackets === 0) {
        curstate = states.DEFAULT;
        var strform = strbuff.join('');
        strbuff = [];
        if (strform in whitelist) {
          outbuffer.push('<' + strform + '>');
        } else if (strform.charAt(0) === '/' &&
            strform.substring(1, strform.length) in whitelist) {
          outbuffer.push('<' + strform + '>');
        } else {
          outbuffer.push(lt + strform + gt);
        }
      }
    } else {
      if (curstate === states.TAG) {
        strbuff.push(chr);
      } else {
        if (chr in glift.dom._escapeMap) {
          chr = glift.dom._escapeMap[chr];
        }
        outbuffer.push(chr);
      }
    }
  }
  return outbuffer.join('');
};
