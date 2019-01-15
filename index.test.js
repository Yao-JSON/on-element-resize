const onElResize = require('./index');


test('Verify that parameter 1 belongs to HTMLElement', () => {
  const el = "test";
  const handler = () => {};

  try{
    onElResize(el, handler)
  } catch(error){
    expect(error).toBe("Parameter 1 is not instance of 'HTMLElement'.")
  }
})

test('Unsupported tag type. Change the tag or wrap it in a supported tag(e.g. div).', () => {
  const el = document.createElement('style');
  const handler = () => {};
  try{
    onElResize(el, handler)
  } catch(error){
    expect(error).toBe("Unsupported tag type. Change the tag or wrap it in a supported tag(e.g. div).")
  }
})

test("Parameter 2 is not of type 'function'.", () => {
  const el = document.createElement('style');
  const handler = null;
  try{
    onElResize(el, handler)
  } catch(error){
    expect(error).toBe("Parameter 2 is not of type 'function'.")
  }
})


test('Testing DOM changes', () => {
  let resizeResult = null;
  let el = document.createElement('div');
  const handler = (res) => {
    resizeResult = res;
  }
  onElResize(el, handler);
  expect(resizeResult).toBeNull();
})
