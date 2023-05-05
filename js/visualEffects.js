export function visualEffects() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.closest('.box-method').querySelector('.press-enter').classList.add('_active')
        })

        input.addEventListener('focusout', (e) => {
            e.target.closest('.box-method').querySelector('.press-enter').classList.remove('_active')
        })
    })
}
