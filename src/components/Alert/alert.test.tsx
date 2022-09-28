import { render, fireEvent } from '@testing-library/react'
import Alert from './index';

describe(`检测 Alert 组件`, () => {
    it(`检测【 content 】`, () => {
        const wrapper = render(<Alert content='content' type='primary' />)
        const element = wrapper.getByText('content') as HTMLSpanElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('DIV');
        expect(element).toHaveClass('flex flex-row justify-between items-center w-full');
    })
    it(`检测【 icon 】`, () => {
        const wrapper = render(<Alert content='content' type='primary' icon="home" />);
        const element = wrapper.getByText('content') as HTMLSpanElement;
        const span = element.previousSibling as HTMLSpanElement;
        expect(span).toHaveClass('mr-2 cursor-pointer');
        expect(span.childNodes[0].firstChild).toHaveClass('iconfont icon-home')
    })
    it(`检测【 closed 】`, () => {
        const wrapper = render(<Alert content='content' type='primary' icon="home" closed />);
        const element = wrapper.getByText('content') as HTMLSpanElement;
        const span = element.childNodes[1] as HTMLButtonElement;
        expect(span).toHaveClass('mr-2 cursor-pointer');
        fireEvent.click(span);
        expect(element).not.toBeInTheDocument()
    })
});