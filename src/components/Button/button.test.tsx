import { render, fireEvent } from '@testing-library/react'
import { Button } from '../index'

const defaultClick = {
    onClick: jest.fn()
}

describe(`检测 Button 组件`, () => {
    it(`检测【 primary 】`, () => {
        const wrapper = render(<Button {...defaultClick} type='primary'>primary</Button>);
        const element = wrapper.getByText('primary').parentNode as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('bg-blue-400 hover:bg-blue-500');
    })
    it(`检测【 disabled 】`, () => {
        const wrapper = render(<Button {...defaultClick} type='primary' disabled>disabled</Button>);
        const element = wrapper.getByText('disabled').parentNode as HTMLButtonElement;
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(defaultClick.onClick).not.toHaveBeenCalled();
    })
    it(`检测【 lg 】`, () => {
        const wrapper = render(<Button {...defaultClick} type='primary' size='lg'>lg</Button>);
        const element = wrapper.getByText('lg').parentNode as HTMLButtonElement;
        expect(element).toHaveClass('w-24 h-12 leading-12 text-lg');
    })
    it(`检测【 danger 】`, () => {
        const wrapper = render(<Button {...defaultClick} type='danger' size='lg'>danger</Button>);
        const element = wrapper.getByText('danger').parentNode as HTMLButtonElement;
        expect(element).toHaveClass('bg-red-400 hover:bg-red-500');
    })
});