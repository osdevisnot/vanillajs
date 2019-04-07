import emitter from '../../src/emitter';

describe('emitter.js', () => {
  let sub;
  beforeEach(() => {
    sub = cy.stub();
  });
  it('is defined', () => {
    expect(emitter).not.to.be.undefined;
  });
  it('can register handlers', () => {
    emitter.on('ev', sub);
  });
  it('can emit events', () => {
    emitter.emit('ev');
  });
  it('calls the handler on event', () => {
    emitter.on('ev', sub);
    emitter.emit('ev');
    expect(sub).to.be.calledWith(undefined);
  });
  it('calls the handler with given payload', () => {
    emitter.on('ev', sub);
    emitter.emit('ev', { a: 10 });
    expect(sub).to.be.calledWith({ a: 10 });
  });
  it('calls the handled on multiple events', () => {
    emitter.on('ev', sub);
    emitter.emit('ev', { a: 10 });
    emitter.emit('ev', { b: 20 });
    expect(sub).to.be.calledWith({ a: 10 });
    expect(sub).to.be.calledWith({ b: 20 });
    expect(sub).to.have.callCount(2);
  });
  it('stops calling handler after unsub', () => {
    emitter.on('ev', sub);
    emitter.emit('ev', { a: 10 });
    expect(sub).to.be.calledWith({ a: 10 });
    emitter.off('ev', sub);
    emitter.emit('ev', { a: 10 });
    expect(sub).to.be.calledOnce;
  });
  it('stops calling handler after bound unsub', () => {
    const unsub = emitter.on('ev', sub);
    emitter.emit('ev', { a: 10 });
    expect(sub).to.be.calledWith({ a: 10 });
    unsub();
    emitter.emit('ev', { a: 10 });
    expect(sub).to.be.calledOnce;
  });
});
