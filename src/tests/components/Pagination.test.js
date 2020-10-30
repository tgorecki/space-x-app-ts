import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "../../components/shared/Pagination/Pagination";

describe('<Pagination/>', () => {
    const mockFunction = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Pagination handlePageChange={mockFunction}/>);
    });

    it('should rendered two buttons', () => {
        wrapper.setProps({ hasNextPage: true, hasPrevPage: false });
        expect(wrapper.find('button')).toHaveLength(2);
        wrapper.find('button').forEach((node) => {
            expect(node.hasClass('btn')).toEqual(true);
            expect(node.text().includes('page')).toEqual(true)
        });
    });

    it('should render button for previous page', () => {
        wrapper.setProps({ hasNextPage: true, hasPrevPage: true });
        const button = wrapper.find('button').at(0);
        expect(button.text()).toEqual('Previous page');
        expect(button.hasClass('btn btn-dark')).toEqual(true);
        button.simulate('click');
        expect(mockFunction.mock.calls).toHaveLength(1);
        expect(mockFunction.mock.calls[0][0]).toEqual("PREVIOUS_PAGE");
    });

    it('should render button for next page', () => {
        wrapper.setProps({ hasNextPage: true, hasPrevPage: true });
        const button = wrapper.find('button').at(1);
        expect(button.text()).toEqual('Next page');
        expect(button.hasClass('btn btn-light')).toEqual(true);
        button.simulate('click');
        expect(mockFunction.mock.calls).toHaveLength(1)
        expect(mockFunction.mock.calls[0][0]).toEqual("NEXT_PAGE");
    });
});
