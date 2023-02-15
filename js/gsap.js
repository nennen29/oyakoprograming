(function () {
    (function () {
        splitText();
        const topCharacterC = '#top-character-c';
        const topCharacterP = '#top-character-p';
        const topTextFirst = '#top-text-first';
        const topTextSecond = '#top-text-second';
        const topTextThird = '#top-text-third';
        const topImg = '#top-img';
        const topBackground = '.top-background';
        const title1 = '#desc-body-h1';
        const title1span = '#desc-body-h1>span';
        const moreP1 = '#more-p1';
        const moreP2 = '#more-p2';
        const moreP3 = '#more-p3';
        const moreP4 = '#more-p4';
        const moreP5 = '#more-p5';
        const moreP6 = '#more-p6';

        const Pconcept = '.parent-concept';
        const Pwhat = '.parent-what';
        const Pability = '.parent-ability';
        const Ptogether = '.parent-together';


        gsap.set(topCharacterC, {
            // opacity: 0,
            y: 0,
            scale: 0,
        });
        gsap.set(topCharacterP, {
            // opacity: 0,
            y: 0,
            scale: 0,
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
            scale: 0,
        });
        gsap.set(topImg, {
            scale: 0,
        });
        gsap.set(topBackground, {
            opacity: 0,
            y: 30,
        });
        // gsap.set(title1,{
        //     opacity: 0,
        //     y: 10,
        // });
        gsap.set(title1span, {
            opacity: 0,
            y: 10,
        });
        gsap.set(moreP1, {
            opacity: 0,
            y: 0,
        });
        gsap.set(moreP2, {
            opacity: 0,
            y: 0,
        });
        gsap.set(moreP3, {
            opacity: 0,
            y: 0,
        });
        gsap.set(moreP4, {
            opacity: 0,
            y: 0,
        });
        gsap.set(moreP5, {
            opacity: 0,
            y: 0,
        });
        gsap.set(moreP6, {
            opacity: 0,
            y: 0,
        });


        gsap.set(Pconcept, {
            opacity: 0,
            y: 30,
        });
        gsap.set(Pwhat, {
            opacity: 0,
            y: 30,
        });
        gsap.set(Pability, {
            opacity: 0,
            y: 30,
        });
        gsap.set(Ptogether, {
            opacity: 0,
            y: 30,
        });



        const tl = gsap.timeline();
        tl.to(
            topCharacterC, {
                // opacity: 1,
                scale: 1,
                duration: 0.2,
                delay: 0.5,
                ease: 'power4.out',
            }).to(
            topCharacterP, {
                // opacity: 1,
                scale: 1,
                duration: 0.2,
                delay: 0.5,
                ease: 'power4.out',
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
                scale: 1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            topImg, {
                scale: -1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            topBackground, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.5,
                // stagger: {
                //   amount: 0.6,
                //   from: "start",
                //   ease: "sine.in"
                // }
            }
        );


        const scrollTitle1 = gsap.timeline({
            scrollTrigger: {
                trigger: title1,
                start: "top center",
            },
        });

        const scrollTitle2 = gsap.timeline({
            scrollTrigger: {
                trigger: moreP1,
                start: "top center",
            },
        });

        const scrollconcept = gsap.timeline({
            scrollTrigger: {
                trigger: Pconcept,
                start: "top center",
            }
        });

        const scrollwhat = gsap.timeline({
            scrollTrigger: {
                trigger: Pwhat,
                start: "top center",
            }
        });

        const scrollability = gsap.timeline({
            scrollTrigger: {
                trigger: Pability,
                start: "top center",
            }
        });

        const scrolltogether = gsap.timeline({
            scrollTrigger: {
                trigger: Ptogether,
                start: "top center",
            }
        });

        scrollTitle1.to(
                title1, {
                    opacity: 1,
                    duration: 0.2,
                    y: 0,
                }
            )
            .to(
                title1span, {
                    opacity: 1,
                    duration: 0.8,
                    y: 0,
                    stagger: {
                        amount: 0.6,
                        from: 'start',
                    }
                }
            );


        scrollTitle2.to(
            moreP1, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            moreP2, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            moreP3, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            moreP4, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            moreP5, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }
        ).to(
            moreP6, {
                opacity: 1,
                duration: 0.2,
                delay: 0.5,
            }
        );

        scrollconcept.to(
            Pconcept, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }
        );

        scrollwhat.to(
            Pwhat, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }
        );

        scrollability.to(
            Pability, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }
        );

        scrolltogether.to(
            Ptogether, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }
        );


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

    function splitText() {
        const Text1 = document.querySelectorAll('#desc-body-h1');
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