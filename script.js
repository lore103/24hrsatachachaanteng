$(document).ready(function() {
    let breakfastJsonLoaded = false;
    let lunchJsonLoaded = false;
    let afternoonteaJsonLoaded =  false;
    let dinnerJsonLoaded = false;
    let latenightsnackJsonLoaded = false;
    let clickEnabled = false;

    $('.refresh').on('click', function() {
        console.log('Refresh button clicked');
        
        window.scrollTo(0, 0);
        
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        setTimeout(function() {
            window.location.reload();
        }, 100);
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 300) {
            $('.chachaantengtitle img').css({
                'position': 'fixed',
                'top': '5%',
                'left': '50%',
                'transform': 'translate(-50%, 0) scale(0.3)',
                'transform-origin': 'top center',
                'transition': 'all 0.6s ease'
            });
            $('.scrollinstruction').css({
                'opacity': '0',
                'transition': 'all 0.1s ease',
            });
        } else {
            $('.chachaantengtitle img').css({
                'position': 'fixed',
                'top': '50vh',
                'left': '50%',
                'transform': 'translate(-50%, -50%) scale(0.65)',
                'transform-origin': 'center center',
                'transition': 'all 0.6s ease'
            });
            $('.scrollinstruction').css({
                'opacity': '1',
                'transition': 'all 0.1s ease',
            });
        }

        if ($(window).scrollTop() > 450) {
            $('.intro-text').css({
                'visibility':'visible',
                'opacity': '1',
                'position': 'fixed',
            });
        } else {
            $('.intro-text').css({
                'visibility': 'hidden',
                'opacity': '0',
                'position': 'relative'
            });
        }

        if ($(window).scrollTop() > 1050) {
            $('.intro-text').html(`
                <p>
                Granted, you can actually get whatever you want at 
                whatever time, but ideally, these are things you would eat for 
                each meal. :) <br><br> All you have to do is scroll!
                </p>
            `);
        } else if ($(window).scrollTop() > 750) {
            $('.intro-text').html(`
                <p>
                This website lets you create a full-day food itinerary, from a hearty breakfast to a cheeky late night snack, with suggestions based on popular Cha Chaan Teng dishes loved by people in Hong Kong. The site generates a new lineup of meals each time you visit. Whether you're planning your day or just curious about what locals eat around the clock, there's always something new to eat!
                </p>
            `);
        } else {
            $('.intro-text').html(`
                <p>
                A cha chaan teng is a type of Hong Kong-style café that blends Western and Chinese cuisine, known for its affordable and diverse menu. These casual diners are a cultural staple in Hong Kong, often bustling with customers throughout the day. The vibe is retro and no-frills, with tiled floors, booth seating, and metal-framed glass windows. They serve everything from breakfast to late-night snacks, making them a go-to spot for quick meals and comfort food. This website will introduce the various foods that are typically enjoyed throughout a 24-hour day.
                </p>
            `);
        }

        if ($(window).scrollTop() > 1200) {
            $('.intro-text').css({
                'opacity': '0',
                'transition': 'all 0.6s ease'                
            });
        } else {
            $('.intro-text').css({
                'opacity': '1',
                'transition': 'all 0.6s ease'
                
            });
        }

        if ($(window).scrollTop() > 1300) {
            $('.chachaantengtitle img').css({
                'position': 'fixed',
                'top': '5%',
                'left': '7.5%',
                'transform': 'translate(-50%, 0) scale(0.2)',
                'transform-origin': 'top center',
                'transition': 'all .7s ease',
                'opacity': '0'
            });
            $('.receipt').css({
                'opacity': '1',
                'transition': 'all 0.7s ease',
            });
            $('.refresh').css({
                'opacity': '1',
                'transition': 'all 0.2s ease',
            });
        } else {
            $('.chachaantengtitle img').css({
                'position': 'fixed',
                'top': '5%',
                'left': '50%',
                'transform': 'translate(-50%, 0) scale(0.3)',
                'transform-origin': 'top center',
                'transition': 'all 1s ease'
            });
            $('.receipt').css({
                'opacity': '0',
                'transition': 'all 0.7s ease',
            });
            

        }

        if ($(window).scrollTop() > 1500) {
            $('.bfast-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '1'
            });
            $('.background-layer').css({
                'opacity':'0.4'
            })
            $('.time').css({
                'opacity':'1'
            })

        } else {
            $('.bfast-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '0'
            });
            $('.background-layer').css({
                'opacity':'0'
            })
            $('.time').css({
                'opacity':'0'
            })
            

        }

        if ($(window).scrollTop() > 1675 && !breakfastJsonLoaded) {
                breakfastJsonLoaded = true;
            
                $.getJSON("json_bfast.json", function (data) {
                    if (data.length > 0) {
                        const randomIndex = Math.floor(Math.random() * data.length);
                        const item = data[randomIndex];
            
                        const imageHtml = `
                            <div class="breakfast-item" style="
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: fit-content;
                            z-index: 10000;">
                                
                                <img src="${item.image}" alt="${item.englishname}" class="breakfast-img" style="
                               width: 25vw; 
                            height: auto;
                            margin-bottom: 1vw;
                            transition: all 2s ease;
                            transform: translateX(100vw); 
                            z-index: 10001;">

                                <div class="breakfast-info" style="
                                margin-left: auto;
                                margin-right: auto;
                                text-align: center;
                                width: fit-content;
                                max-width: 40vw;
                                font-size: 1.25vw;
                                background-color: #FCF6E7;
                                padding: 1vw;
                                border-radius: 1vw;
                                opacity: 0;
                                transition: opacity 0.6s ease 0.3s;
                                color: #433D39;
                                border: 13px dotted #9d9292">
                                    
                                    <div class="bfastchinesename" style="
                                    font-family: HYChangsong;">${item.chinesename}</div>
            
                                    <div class="bfastenglishname" style="
                                    font-family: BacasimeAntique-Regular;">${item.englishname}</div>
            
                                    <div class="bfastprice" style="
                            font-family: BacasimeAntique-Regular;
                            margin: .6vw;
                            color: #9d9292;"> 
                                <span style="
                                color:#458D78;
                                border-style: solid;
                                border-color: #458D78;
                                border-radius:.25vw;
                                padding: .1vw;">price</span> 
                                ${item.price}
                            </div>
                            
                            <div class="bfastingredients" style="
                            font-family: BacasimeAntique-Regular;
                            margin: .6vw;
                            color: #9d9292;"> 
                                <span style="
                                color: #4A6CDD;
                                border-style: solid;
                                border-color: #4A6CDD;
                                border-radius:.25vw;
                                padding: .1vw;">ingredients</span> 
                                ${item.ingredients}
                            </div>
            
                                    <div class="bfastdesc" style="
                                    font-family: BacasimeAntique-Regular;
                                    color: #9d9292;">${item.description}</div>
                                </div>
                            </div>
                        `;
            
                        $(".breakfast").html(imageHtml);
                        
                        setTimeout(function() {
                            $(".breakfast-img").css("transform", "translateX(0%)");
                            $(".breakfast-info").css("opacity", "1");
                        }, 100);
                    }
                });
            }
        if ($(window).scrollTop() > 1900){
            $('.breakfast-info').css({
                'opacity':'0',
                'transition':'all 0.2s ease'
            })
        } else {
            $('.breakfast-info').css({
                'opacity':'1'
            })
        }
        
        if ($(window).scrollTop() > 1910){
            $('.breakfast-img').css({
                'width':'11vw',
                'transition':'all 1s ease',
            });
        } else{
            $('.breakfast-img').css({
                'width':'25vw',
                'transition':'all 1s ease'
            });
        }

        if ($(window).scrollTop() > 1920){
            $('.breakfast-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(-40vw, -5vh)'
            });
            $('.breakfast-item').css({
                'z-index':'10',
            });

        } else{
            $('.breakfast-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(0vw, 0vh)'
            });
            $('.breakfast-item').css({
                'z-index':'10000',
            });
        }

        if ($(window).scrollTop() > 2050) {
            $('.lunch-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '1'
            });
            $('.bfast-title').css({
                'opacity':'0'
            })
            $('body').css({
                'background-color': '#fff0a6',
                'transition':'all 1s ease',
            })
            $('.refresh').css({
                'opacity': '1',
                'transition': 'all 0.2s ease',
                'background-color': '#fff0a6'
            });
            $('.time').css({
                'background-color': '#fff0a6'
            })
            $('.time').html('12:30');
            
        } else {
            $('.lunch-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '0'
            });
            $('body').css({
                'background-color': '#FCF6E7',
                'transition':'all 1s ease',
            })
        };

        if ($(window).scrollTop() > 2250 && !lunchJsonLoaded) {
            lunchJsonLoaded = true;
        
            $.getJSON("json_lunch.json", function (data) {
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const item = data[randomIndex];
        
                    const imageHtml = `
                        <div class="lunch-item" style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        z-index: 10000;">
                            
                            <img src="${item.image}" alt="${item.englishname}" class="lunch-img" style="
                           width: 25vw; 
                        height: auto;
                        margin-bottom: 1vw;
                        transition: all 2s ease;
                        transform: translateX(100vw); 
                        z-index: 10001;">
                        
                            <div class="lunch-info" style="
                            margin-left: auto;
                            margin-right: auto;
                            text-align: center;
                            width: fit-content;
                            max-width: 40vw;
                            font-size: 1.25vw;
                            background-color: #fff0a6;
                            padding: 1vw;
                            border-radius: 1vw;
                            opacity: 0;
                            transition: opacity 0.6s ease 0.3s;
                            color: #433D39;
                            border: 13px dotted #9d9292">
                                
                                <div class="lunchchinesename" style="
                                font-family: HYChangsong;">${item.chinesename}</div>
        
                                <div class="lunchenglishname" style="
                                font-family: BacasimeAntique-Regular;">${item.englishname}</div>
        
                                <div class="lunchprice" style="
                        font-family: BacasimeAntique-Regular;
                        margin: .6vw;
                        color: #9d9292;"> 
                            <span style="
                            color:#458D78;
                            border-style: solid;
                            border-color: #458D78;
                            border-radius:.25vw;
                            padding: .1vw;">price</span> 
                            ${item.price}
                        </div>
                        
                        <div class="lunchingredients" style="
                        font-family: BacasimeAntique-Regular;
                        margin: .6vw;
                        color: #9d9292;"> 
                            <span style="
                            color: #4A6CDD;
                            border-style: solid;
                            border-color: #4A6CDD;
                            border-radius:.25vw;
                            padding: .1vw;">ingredients</span> 
                            ${item.ingredients}
                        </div>
        
                                <div class="lunchdesc" style="
                                font-family: BacasimeAntique-Regular;
                                color: #9d9292;">${item.description}</div>
                            </div>
                        </div>
                    `;
        
                    $(".lunch").html(imageHtml);
                    
                    setTimeout(function() {
                        $(".lunch-img").css("transform", "translateX(0%)");
                        $(".lunch-info").css("opacity", "1");
                    }, 100);
                }
            });
        }

        if ($(window).scrollTop() > 2350){
            $('.lunch-info').css({
                'opacity':'0',
                'transition':'all 0.2s ease'
            })
        } else {
            $('.lunch-info').css({
                'opacity':'1'
            })
        }
        
        if ($(window).scrollTop() > 2400){
            $('.lunch-img').css({
                'width':'11vw',
                'transition':'all 1s ease',
            });
        } else{
            $('.lunch-img').css({
                'width':'25vw',
                'transition':'all 1s ease'
            });
        }
        if ($(window).scrollTop() > 2500){
            $('.lunch-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(-38vw, 7vh)'
            });
            $('.lunch-item').css({
                'z-index':'10',
            });

        } else{
            $('.lunch-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(0vw, 0vh)'
            });
            $('.lunch-item').css({
                'z-index':'10000',
            });
        }

        if ($(window).scrollTop() > 2570) {
            $('.afternoontea-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '1'
            });
            $('.lunch-title').css({
                'opacity':'0'
            })
            $('.background-layer').css({
                'background-image': `url('redtilebackground.svg')`,
                'opacity':'0.8',
            })
            $('body').css({
                'background-color': '#b4dead',
                'transition':'all 1s ease',
            })
            $('.refresh').css({
                'opacity': '1',
                'transition': 'all 0.2s ease',
                'background-color': '#b4dead'
            });
            $('.time').css({
                'background-color': '#b4dead'
            })
            $('.time').html('16:00');
            
        } else {
            $('.afternoontea-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '0'
            });
            $('.background-layer').css({
                'background-image': `url('greentilebackground.svg')`,
            })
        };

        if ($(window).scrollTop() > 2700 && ! afternoonteaJsonLoaded) {
            afternoonteaJsonLoaded = true;
        
            $.getJSON("json_afternoontea.json", function (data) {
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const item = data[randomIndex];
        
                    const imageHtml = `
                        <div class="afternoontea-item" style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        z-index: 10000;">
                            
                            <img src="${item.image}" alt="${item.englishname}" class="afternoontea-img" style="
                            width: 25vw; 
                            height: auto;
                            margin-bottom: 1vw;
                            transition: all 2s ease;
                            transform: translateX(100vw); 
                            z-index: 10001;">
                        
                            <div class="afternoontea-info" style="
                            margin-left: auto;
                            margin-right: auto;
                            text-align: center;
                            width: fit-content;
                            max-width: 40vw;
                            font-size: 1.25vw;
                            background-color: #b4dead;
                            padding: 1vw;
                            border-radius: 1vw;
                            opacity: 0;
                            transition: opacity 0.6s ease 0.3s;
                            color: #433D39;
                            border: 13px dotted #9d9292">
                                
                                <div class="afternoonteachinesename" style="
                                font-family: HYChangsong;">${item.chinesename}</div>
        
                                <div class="afternoonteaenglishname" style="
                                font-family: BacasimeAntique-Regular;">${item.englishname}</div>
        
                                <div class="afternoonteaprice" style="
                        font-family: BacasimeAntique-Regular;
                        margin: .6vw;
                        color: #9d9292;"> 
                            <span style="
                            color:#458D78;
                            border-style: solid;
                            border-color: #458D78;
                            border-radius:.25vw;
                            padding: .1vw;">price</span> 
                            ${item.price}
                        </div>
                        
                        <div class="afternoonteaingredients" style="
                        font-family: BacasimeAntique-Regular;
                        margin: .6vw;
                        color: #9d9292;"> 
                            <span style="
                            color: #4A6CDD;
                            border-style: solid;
                            border-color: #4A6CDD;
                            border-radius:.25vw;
                            padding: .1vw;">ingredients</span> 
                            ${item.ingredients}
                        </div>
        
                                <div class="afternoonteadesc" style="
                                font-family: BacasimeAntique-Regular;
                                color: #9d9292;">${item.description}</div>
                            </div>
                        </div>
                    `;
        
                    $(".afternoontea").html(imageHtml);
                    
                    setTimeout(function() {
                        $(".afternoontea-img").css("transform", "translateX(0%)");
                        $(".afternoontea-info").css("opacity", "1");
                    }, 100);
                }
            });
        }

        if ($(window).scrollTop() > 2800){
            $('.afternoontea-info').css({
                'opacity':'0',
                'transition':'all 0.2s ease'
            })
        } else {
            $('.afternoontea-info').css({
                'opacity':'1'
            })
        }
        
        if ($(window).scrollTop() > 2850){
            $('.afternoontea-img').css({
                'width':'11vw',
                'transition':'all 1s ease',
            });
        } else{
            $('.afternoontea-img').css({
                'width':'25vw',
                'transition':'all 1s ease'
            });
        }

        if ($(window).scrollTop() > 2900){
            $('.afternoontea-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(-40vw, 20vh)'
            });
            $('.afternoontea-item').css({
                'z-index':'10',
            });

        } else{
            $('.afternoontea-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(0vw, 0vh)'
            });
            $('.afternoontea-item').css({
                'z-index':'10000',
            });
        }

        if ($(window).scrollTop() > 3020) {
            $('.dinner-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '1'
            });
            $('.afternoontea-title').css({
                'opacity':'0'
            })
            $('.background-layer').css({
                'opacity':'0.9',
            })
            $('body').css({
                'background-color': '#8099ed',
                'transition':'all 1s ease',
            })
            $('.refresh').css({
                'opacity': '1',
                'transition': 'all 0.2s ease',
                'background-color': '#8099ed',
                'border': '13px dotted #FCF6E7'
            });
            $('.time').css({
                'background-color': '#8099ed',
                'border': '13px dotted #FCF6E7'

            })
            $('.time').html('20:00');
            
        } else {
            $('.dinner-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '0'
            });
        };

        if ($(window).scrollTop() > 3200 && ! dinnerJsonLoaded) {
            dinnerJsonLoaded = true;
        
            $.getJSON("json_dinner.json", function (data) {
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const item = data[randomIndex];
        
                    const imageHtml = `
                        <div class="dinner-item" style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        z-index: 10000;">
                            
                            <img src="${item.image}" alt="${item.englishname}" class="dinner-img" style="
                            width: 25vw; 
                            height: auto;
                            margin-bottom: 1vw;
                            transition: all 2s ease;
                            transform: translateX(100vw); 
                            z-index: 10001;">
                        
                            <div class="dinner-info" style="
                            margin-left: auto;
                            margin-right: auto;
                            text-align: center;
                            width: fit-content;
                            max-width: 40vw;
                            font-size: 1.25vw;
                            background-color: #8099ed;
                            padding: 1vw;
                            border-radius: 1vw;
                            opacity: 0;
                            transition: opacity 0.6s ease 0.3s;
                            color: #433D39;
                            border: 13px dotted #FCF6E7">
                                
                                <div class="dinnerchinesename" style="
                                font-family: HYChangsong;">${item.chinesename}</div>
        
                                <div class="dinnerenglishname" style="
                                font-family: BacasimeAntique-Regular;">${item.englishname}</div>
        
                                <div class="dinnerprice" style="
                                font-family: BacasimeAntique-Regular;
                                margin: .6vw;
                                color: #FCF6E7;"> 
                            <span style="
                            color:#458D78;
                            border-style: solid;
                            border-color: #458D78;
                            border-radius:.25vw;
                            padding: .1vw;">price</span> 
                            ${item.prices}
                        </div>
                        
                        <div class="dinneringredients" style="
                        font-family: BacasimeAntique-Regular;
                        margin: .6vw;
                        color: #FCF6E7;"> 
                            <span style="
                            color: #4A6CDD;
                            border-style: solid;
                            border-color: #4A6CDD;
                            border-radius:.25vw;
                            padding: .1vw;">ingredients</span> 
                            ${item.ingredients}
                        </div>
        
                                <div class="dinnerdesc" style="
                                font-family: BacasimeAntique-Regular;
                                color: #FCF6E7;">${item.description}</div>
                            </div>
                        </div>
                    `;
        
                    $(".dinner").html(imageHtml);
                    
                    setTimeout(function() {
                        $(".dinner-img").css("transform", "translateX(0%)");
                        $(".dinner-info").css("opacity", "1");
                    }, 100);
                }
            });
        }

        if ($(window).scrollTop() > 3250){
            $('.dinner-info').css({
                'opacity':'0',
                'transition':'all 0.2s ease'
            })
        } else {
            $('.dinner-info').css({
                'opacity':'1'
            })
        }
        
        if ($(window).scrollTop() > 3300){
            $('.dinner-img').css({
                'width':'11vw',
                'transition':'all 1s ease',
            });
        } else{
            $('.dinner-img').css({
                'width':'25vw',
                'transition':'all 1s ease'
            });
        }

        if ($(window).scrollTop() > 3400){
            $('.dinner-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(-38vw, 35vh)'
            });
            $('.dinner-item').css({
                'z-index':'10',
            });

        } else{
            $('.dinner-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(0vw, 0vh)'
            });
            $('.dinner-item').css({
                'z-index':'10000',
            });
        }

        if ($(window).scrollTop() > 3450) {
            $('.latenightsnack-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '1'
            });
            $('.dinner-title').css({
                'opacity':'0'
            })
            $('.background-layer').css({
                'background-image': `url('bluetilebackground.svg')`,
                'opacity':'1',
            })
            $('body').css({
                'background-color': '#8c8682',
                'transition':'all 1s ease',
            })
            $('.refresh').css({
                'opacity': '1',
                'transition': 'all 0.2s ease',
                'background-color': '#8c8682',
                'border': '13px dotted #FCF6E7'
            
            });
            $('.time').css({
                'background-color': '#8c8682',
                'border': '13px dotted #FCF6E7'

            })
            $('.time').html('00:00');
 
        } else {
            $('.latenightsnack-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '0'
            });
        };

        if ($(window).scrollTop() > 3550 && ! latenightsnackJsonLoaded) {
            latenightsnackJsonLoaded = true;
        
            $.getJSON("json_latenightsnack.json", function (data) {
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const item = data[randomIndex];
        
                    const imageHtml = `
                        <div class="latenightsnack-item" style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        z-index: 10000;">
                            
                            <img src="${item.image}" alt="${item.englishname}" class="latenightsnack-img" style="
                            width: 25vw; 
                            height: auto;
                            margin-bottom: 1vw;
                            transition: all 2s ease;
                            transform: translateX(100vw); 
                            z-index: 10001;">
                        
                            <div class="latenightsnack-info" style="
                            margin-left: auto;
                            margin-right: auto;
                            text-align: center;
                            width: fit-content;
                            max-width: 40vw;
                            font-size: 1.25vw;
                            background-color: #8c8682;
                            padding: 1vw;
                            border-radius: 1vw;
                            opacity: 0;
                            transition: opacity 0.6s ease 0.3s;
                            color: #433D39;
                            border: 13px dotted #FCF6E7">
                                
                                <div class="latenightsnackchinesename" style="
                                font-family: HYChangsong;">${item.chinesename}</div>
        
                                <div class="latenightsnackenglishname" style="
                                font-family: BacasimeAntique-Regular;">${item.englishname}</div>
        
                                <div class="latenightsnackprice" style="
                                font-family: BacasimeAntique-Regular;
                                margin: .6vw;
                                color: #FCF6E7;"> 
                            <span style="
                            color:#458D78;
                            border-style: solid;
                            border-color: #458D78;
                            border-radius:.25vw;
                            padding: .1vw;">price</span> 
                            ${item.price}
                        </div>
                        
                        <div class="latenightsnackingredients" style="
                        font-family: BacasimeAntique-Regular;
                        margin: .6vw;
                        color: #FCF6E7;"> 
                            <span style="
                            color: #4A6CDD;
                            border-style: solid;
                            border-color: #4A6CDD;
                            border-radius:.25vw;
                            padding: .1vw;">ingredients</span> 
                            ${item.ingredients}
                        </div>
        
                                <div class="latenightsnackdesc" style="
                                font-family: BacasimeAntique-Regular;
                                color: #FCF6E7;">${item.description}</div>
                            </div>
                        </div>
                    `;
        
                    $(".latenightsnack").html(imageHtml);
                    
                    setTimeout(function() {
                        $(".latenightsnack-img").css("transform", "translateX(0%)");
                        $(".latenightsnack-info").css("opacity", "1");
                    }, 100);
                }
            });
        }

        if ($(window).scrollTop() > 3630){
            $('.latenightsnack-info').css({
                'opacity':'0',
                'transition':'all 0.2s ease'
            })
        } else {
            $('.latenightsnack-info').css({
                'opacity':'1'
            })
        }
        
        if ($(window).scrollTop() > 3650){
            $('.latenightsnack-img').css({
                'width':'11vw',
                'transition':'all 1s ease',
            });
        } else{
            $('.latenightsnack-img').css({
                'width':'25vw',
                'transition':'all 1s ease'
            });
        }

        if ($(window).scrollTop() > 3700){
            $('.latenightsnack-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(-40vw, 46vh)'
            });
            $('.latenightsnack-item').css({
                'z-index':'10',
            });

        } else{
            $('.latenightsnack-img').css({
                'transition':'all 1s ease',
                'transform': 'translate(0vw, 0vh)'
            });
            $('.latenightsnack-item').css({
                'z-index':'10000',
            });
        }

        if ($(window).scrollTop() > 3750) {
            $('.last-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '1'
            });
            $('.latenightsnack-title').css({
                'opacity':'0'
            })
            $('.refresh').css({
                'opacity': '1',
                'transition': 'all 0.5s ease',
                'background-color': '#8c8682',
                'bottom': '40vh',
                'right': '40vw',
                'font-size': '2.5vw'

            });
            
        } else {
            $('.last-title').css({
                'transition': 'all 0.5s ease',
                'opacity': '0'
            });

        };

    });


});


