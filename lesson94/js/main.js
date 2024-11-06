(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    const tabControls = document.querySelector('.tab__controls')

    tabControls.addEventListener('click', openTab)
    function openTab(e) {

        const tabControl = e.target.closest('.tab__controls-link')

        if(!tabControl) return

        e.preventDefault()
        if(tabControl.classList.contains('tab__controls-link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab__controls-link--active')
        const activeContent = document.querySelector('.tab-content--show')

        activeContent.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')
        
        activeControl.classList.remove('tab__controls-link--active')
        tabControl.classList.add('tab__controls-link--active')
    }

})()