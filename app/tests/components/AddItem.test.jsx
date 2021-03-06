var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddItem = require('AddItem');

describe('AddItem', () => {
    it('should exist', () => {
        expect(AddItem).toExist();
    });
    
    it('should call onAddItem prop with valid data', () => {
        var itemName = 'Grapes';
        var spy = expect.createSpy();
        var addItem = TestUtils.renderIntoDocument(<AddItem onAddItem={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addItem));
        
        addItem.refs.itemName.value = itemName;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(itemName);
    });
    
     it('should not call onAddItem prop when invalid data', () => {
        var itemName = '';
        var spy = expect.createSpy();
        var addItem = TestUtils.renderIntoDocument(<AddItem onAddItem={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addItem));
        
        addItem.refs.itemName.value = itemName;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
});
