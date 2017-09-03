
const Debug = require('.')
,     chai = require('chai')
,     spies = require('chai-spies')
,     intercept = require('intercept-stdout')
;

const debug = new Debug('testing')
,     expect = chai.expect
;

Debug.enable('testing');

chai.use(spies);

const captureStdout = (cb) => {
  
  let captured_text = "";
  
  const unhook_intercept = intercept(function(txt) {
      captured_text += txt;
  });
  
  cb();
  
  unhook_intercept();
  
  return captured_text;  
}

describe('eval-debug', () => {
  
  it('%e option', () => {
    const before = "<before> ";  
    const loggedString = "result of function call";
    const after = " <after>";   
    
    const spy = chai.spy(() => loggedString); 
    
    const output = captureStdout(() => debug(before + '%e' + after, spy));
    
    expect(spy).to.been.called();
    expect(output).to.contain(before);
    expect(output).to.contain(loggedString);
    expect(output).to.contain(after); 
  }); 
});
