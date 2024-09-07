import React from 'react';

function UseCallbackHookChild() {
  console.log('Child component rendered');
  return (
    <div>
      <h2>Child component</h2>
    </div>
  );
}

export default React.memo(UseCallbackHookChild);
