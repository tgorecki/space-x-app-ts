import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "../../components/shared/Pagination/Pagination";

describe('<Pagination/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Pagination handlePageChange={() => {
        }}/>);
    });

    it('should rendered two buttons', () => {
        wrapper.setProps({ hasNextPage: true, hasPrevPage: false });
        expect(wrapper.find('button')).toHaveLength(2);
        wrapper.find('button').forEach((node) => {
            expect(node.hasClass('btn')).toEqual(true);
            expect(node.text().includes('page')).toEqual(true)
        });
    });
});
