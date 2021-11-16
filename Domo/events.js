const EventsEmitter=require('events')

// const emitter= new EventsEmitter()
//
// emitter.on('anything',data=>{
//     console.log('ON:anything ', data)
// })
// emitter.emit('anything', {a:1})
// setTimeout(()=>{
//     emitter.emit('anything', {b:2})
// }, 500)

class Dispatcher extends EventsEmitter{
    subscribe(eventName,cb){
        console.log('[subscribe]')
        this.on(eventName,cb)
    }
    dispatch(eventName, data){
        console.log('[Dispatching...')
        this.emit(eventName,data)
    }
}
const dis = new Dispatcher()
dis.subscribe('aa', data=>{
    console.log('ON aa',data)
})
dis.dispatch('aa',{aa:23})


