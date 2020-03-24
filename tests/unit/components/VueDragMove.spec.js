import Vue from 'vue';
import { stub } from "sinon";
import { shallowMount } from '@vue/test-utils'
import VueDragMove from './../../../src/components/VueDragMove';
import userSelectNone from './../../../src/classes/user-select-none';

describe("VueDragMove::vue", () => {
  it('has a created hook', () => {
    expect(typeof VueDragMove.created).toEqual('function');
  });

  it('has a destroyed hook', () => {
    expect(typeof VueDragMove.destroyed).toEqual('function');
  });

  it('set the correct default data.', () => {
    expect(typeof VueDragMove.data).toEqual('function');
    const defaultData = VueDragMove.data();
    expect(defaultData.x).toEqual(0);
    expect(defaultData.y).toEqual(0);
    expect(typeof defaultData.position).toEqual('object');
  });

  // コンポーネントインスタンスをマウントして検証します。
  it('correctly sets the message when created', () => {
    const vm = new Vue(VueDragMove).$mount();
    expect(vm.top).toBe('0px');
    expect(vm.left).toBe('0px');
  })

  // マウントされたコンポーネントインスタンスを描画して検証します。
  it('renders the correct message', () => {
    const Constructor = Vue.extend(VueDragMove);
    const vm = new Constructor().$mount();
    expect(vm.top).toBe('0px');
    expect(vm.left).toBe('0px');
  })
});

describe("VueDragMove::vue", () => {
  const listenerTypeList = ['pointermove', 'mouseup', 'touchend'];
  let orgAddEventListener;
  let orgRemoveEventListener;

  beforeEach(() => {
    orgAddEventListener = Document.addEventListener;
    orgRemoveEventListener = Document.removeEventListener;
  });

  afterEach(() => {
    Document.addEventListener = orgAddEventListener;
    Document.removeEventListener = orgRemoveEventListener;
  });

  it('set eventlistener.', done => {
    const typeList = [];
    Document.prototype.addEventListener = (type, callback) => {
      typeList.push(type);
      switch (type) {
        case 'pointermove':
          expect(callback.name).toEqual('bound bound handleDoDrag');
          break;
        case 'mouseup':
        case 'touchend':
          expect(callback.name).toEqual('bound bound handleStopDrag');
          break;
        default:
          done(type);
          break;
      }
    };
    const vm = new Vue(VueDragMove).$mount();
    const result = listenerTypeList.filter(type => typeList.indexOf(type) === -1);
    expect(result.length).toEqual(0);
    done();
  });

  it('remove eventlistener.', done => {
    const typeList = [];
    Document.prototype.removeEventListener = (type, callback) => {
      typeList.push(type);
      switch (type) {
        case 'pointermove':
          expect(callback.name).toEqual('bound bound handleDoDrag');
          break;
        case 'mouseup':
        case 'touchend':
          expect(callback.name).toEqual('bound bound handleStopDrag');
          break;
        default:
          done(type);
          break;
      }
    };
    const vm = new Vue(VueDragMove).$mount().$destroy();
    const result = listenerTypeList.filter(type => typeList.indexOf(type) === -1);
    expect(result.length).toEqual(0);
    done();
  });
});

describe("VueDragMove::vue", () => {
  let wrapper;
  let userSelectNoneEnableStub;
  let userSelectNoneDisabledStub;

  beforeEach(() => {
    wrapper = shallowMount(VueDragMove);

    userSelectNoneEnableStub = stub(userSelectNone, "enable").callsFake(() => {});
    userSelectNoneDisabledStub = stub(userSelectNone, "disable").callsFake(() => {});
  });

  afterEach(() => {
    userSelectNoneEnableStub.restore();
    userSelectNoneDisabledStub.restore();
  });

  it('emit event.', () => {
    wrapper.vm.handleDoDrag();
    expect(wrapper.emitted().start).toBe(undefined);
    expect(wrapper.emitted().stop).toBe(undefined);
    expect(wrapper.emitted().dragging).toBe(undefined);

    wrapper.vm.handleStartDrag({ label: 'start drag' });
    expect(wrapper.emitted().start).toBeTruthy();
    expect(wrapper.emitted().start[0][0]['label']).toBe('start drag');
    expect(wrapper.emitted().stop).toBe(undefined);
    expect(wrapper.emitted().dragging).toBe(undefined);

    wrapper.vm.handleDoDrag({ label: 'do drag' });
    expect(wrapper.emitted().start.length).toEqual(1);
    expect(wrapper.emitted().stop).toBe(undefined);
    expect(wrapper.emitted().dragging).toBeTruthy();
    expect(wrapper.emitted().dragging[0][0]['label']).toBe('do drag');

    wrapper.vm.handleStopDrag({ label: 'stop drag' });
    expect(wrapper.emitted().start.length).toEqual(1);
    expect(wrapper.emitted().stop).toBeTruthy();
    expect(wrapper.emitted().stop[0][0]['label']).toBe('stop drag');
    expect(wrapper.emitted().dragging.length).toEqual(1);
  });

  it('move position.', () => {
    wrapper.vm.handleStartDrag({ clientX: 50, clientY: 100 });
    expect(userSelectNoneEnableStub.calledOnce).toBe(true);

    wrapper.vm.handleDoDrag({ clientX: 60, clientY: 90 });
    expect(wrapper.vm.top).toBe('-10px');
    expect(wrapper.vm.left).toBe('10px');

    wrapper.vm.handleDoDrag({ clientX: 30, clientY: 110 });
    expect(wrapper.vm.top).toBe('10px');
    expect(wrapper.vm.left).toBe('-20px');

    expect(userSelectNoneDisabledStub.calledOnce).toBe(false);
    wrapper.vm.handleStopDrag({});
    expect(userSelectNoneDisabledStub.calledOnce).toBe(true);
  });
});
