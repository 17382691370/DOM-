const div = dom.create("<div>newDiv</div>")
console.log(div);

dom.after(test, div);


dom.attr(test, 'title', 'HI, I am Frank')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)

dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')

const fn = ()=>{
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn )

const testDiv = dom.find('#test')[0]
console.log(testDiv)


