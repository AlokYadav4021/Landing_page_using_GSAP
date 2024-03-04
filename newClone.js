let tl = gsap.timeline()
tl.from(".nav,.nav h1,.nav h3,.nav h5", {
    y:-100,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.4,
})
tl.from(".left h1",{
    x:-400,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from(".right img",{
    scale:0.5,
    opacity:0,
    duration:1,
})
gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:2,
    }
})