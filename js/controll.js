		// zoom part one
        var zoom = 1;
		
		$('.zoom').on('click', function(){
			zoom += 0.1;
			$('.target').css('transform', 'scale(' + zoom + ')');
		});
		$('.zoom-init').on('click', function(){
			zoom = 1;
			$('.target').css('transform', 'scale(' + zoom + ')');
		});
		$('.zoom-out').on('click', function(){
			zoom -= 0.1;
			$('.target').css('transform', 'scale(' + zoom + ')');
		});

                        // zoom part two
                            var zoom = 1;
                    
                    $('.bz').on('click', function(){
                        zoom += 0.1;
                        $('.imgRight').css('transform', 'scale(' + zoom + ')');
                    });
                    $('.bzi').on('click', function(){
                        zoom = 1;
                        $('.imgRight').css('transform', 'scale(' + zoom + ')');
                    });
                    $('.bzo').on('click', function(){
                        zoom -= 0.1;
                        $('.imgRight').css('transform', 'scale(' + zoom + ')');
                    });








                                // the img show in the top part one
                                $(document).ready(function () {
                                                $('.swiper-wrapper a').click(function (e) {
                                                    e.preventDefault();
                                                    $('.imgBox .imgLeft').attr("src", $(this).attr("href"));
                                                })
                                            });


                                                // the img show in the top part two
                                                $(document).ready(function () {
                                                                $('.box-checker a').click(function (e) {
                                                                    e.preventDefault();
                                                                    $('.imgBox .imgLeft').attr("src", $(this).attr("href"));
                                                                })
                                                            });



              // the rotate for right

				const img = document.getElementById('img')
                const btnLeft = document.getElementById('btnLeft')
                const btnRight = document.getElementById('btnRight')

                let rotateL = 0
                let rotateR = 0

                btnLeft.addEventListener('click',()=>{
                    rotateL=rotateL+ -90
                    img.style.transform = `rotate(${rotateL}deg)`
                })
                 btnRight.addEventListener('click', () => {
                        rotateR = rotateR + 90
                        img.style.transform = `rotate(${rotateR}deg)`
                    })

                                    // the rotate for left

                                    const imgSecond =document.getElementById('image')
                                    const btnLeftSecond = document.getElementById('bltwoSec')
                                    const btnRightSecond = document.getElementById('brtwoSec')

                                    let rotateLSecond = 0
                                    let rotateRSecond = 0

                                    btnLeftSecond.addEventListener('click',()=>{
                                        rotateLSecond=rotateLSecond+ -90
                                        imgSecond.style.transform = `rotate(${rotateLSecond}deg)`
                                    })
                                    btnRightSecond.addEventListener('click', () => {
                                            rotateRSecond = rotateRSecond + 90
                                            imgSecond.style.transform = `rotate(${rotateRSecond}deg)`
                                        })


                                        // re zoom by click




                                        












                                        