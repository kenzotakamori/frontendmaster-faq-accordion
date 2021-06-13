let questions = document.querySelectorAll('.question')
questions.forEach((q) => {
    q.addEventListener('click', (event) => {
        let parent = event.target.parentNode
        if (parent.classList.contains('active')) {
            parent.classList.remove('active')
        } else {
            let activeAccordion = document.querySelectorAll('li.accordion.active')
            if (activeAccordion.length) {
                activeAccordion[0].classList.remove('active')
            }
            parent.classList.add('active')
        }
    })
})