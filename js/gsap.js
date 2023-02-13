(function () {
    (function () {
        splitText();
        const topCharacterC = '#top-character-c';
        const topCharacterP = '#top-character-p';
        const topTextFirst = '#top-text-first';
        const topTextSecond = '#top-text-second';
        const topTextThird = '#top-text-third';
        gsap.set(topCharacterC, {
            opacity: 0,
            y: 0,
        });
        gsap.set(topCharacterP, {
            opacity: 0,
            y: 0,
        });
        gsap.set(topTextFirst, {
            opacity: 0,
            y: 0,
        });
        gsap.set(topTextSecond, {
            opacity: 0,
            y: 0,
        });
        gsap.set(topTextThird, {
            opacity: 0,
            y: 0,
        });
        const tl = gsap.timeline();
        tl.to(
            topCharacterC, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }).to(
                topCharacterP, {
                    opacity: 1,
                    duration: 0.2,
                    delay: 0.5,
                }
            ).to(
                topTextFirst, {
                    opacity: 1,
                    duration: 0.2,
                    delay: 0.5,
                }
            ).to(
                topTextSecond, {
                    opacity: 1,
                    duration: 0.2,
                    delay: 0.5,
                }
            ).to(
                topTextThird, {
                    opacity: 1,
                    duration: 0.2,
                    delay: 0.5,
                }
            )

    })();

    function splitText() {
        const Text1 = document.querySelectorAll('#top-text-third');
        Text1.forEach(target => {
            let newText = '';
            const text = target.textContent;
            const result = text.split('');
            for (let i = 0; i < result.length; i++) {
                newText += '<span>' + result[i] + '</span>'
            }
            target.innerHTML = newText;
        });
    }
})();