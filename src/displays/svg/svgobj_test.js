glift.displays.svg.svgObjTest = function() {
  module('glift.displays.svg.svgObjTest');
  var svg = glift.displays.svg;

  test('Test svg creation', function() {
    deepEqual(svg.svg().render(),
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>');
  });

  test('Test circle creation', function() {
    deepEqual(svg.circle().render(), '<circle></circle>');
  });

  test('Test rect creation', function() {
    deepEqual(svg.rect().render(), '<rect></rect>');
  });

  test('Test path creation', function() {
    deepEqual(svg.path().render(), '<path></path>');
  });

  test('Test image creation', function() {
    deepEqual(svg.image().render(), '<image></image>');
  });

  test('Test circle+attr creation', function() {
    var circle = svg.circle().attr('r', 30).render();
    deepEqual(circle, '<circle r="30"></circle>');
  });

  test('Test circle creation, with optional attrs', function() {
    deepEqual(svg.circle({'r': 30}).render(), '<circle r="30"></circle>');
  });

  test('Test group creation, with children', function() {
    var group = svg.group().appendNew('circle', {'r': 30});
    deepEqual(group.render(), '<g>\n<circle r="30"></circle>\n</g>');
  });
};
