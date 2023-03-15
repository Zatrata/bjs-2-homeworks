//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache){
        console.log ('Из кэша: ' + objectInCache.value);
        return 'Из кэша: ' + objectInCache.value;
    }

    let value = func(...args);
    cache.push({hash, value})
    if (cache.length > 5) {
        cache.shift()
    }
    console.log('Вычисляем: ' + value);
    return 'Вычисляем: ' + value; 
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let isTrottled = false;
  let timeout;
  function wrapper(...args){
    wrapper.allCount ++;
    if (!isTrottled){
        wrapper.count ++;
        isTrottled = true;
        func(...args);
    }
    timeout = setTimeout(() => {
        wrapper.count ++;
        
        func(...args);
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;;
  return wrapper;
}
