(function () {
  new Typed("#integration-name", {
    strings: [
      "^2000",
      "StudentVUE",
      "Illuminate",
      "PowerSchool",
      "Schoology",
      "Academus"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    showCursor: false,
    onStringTyped: function(i) {
      if(i === 4) {
        new Typed("#hello", {
          strings: [ "goodbye", "hello" ],
          typeSpeed: 50,
          backSpeed: 50,
          showCursor: false,
          backDelay: 0
        })
      }
    }
  })
})()