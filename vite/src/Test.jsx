// Syntax 1
export const Test = ({num1 = 0, num2 = 0, data}) => {

    // js LOGIC
    const sum = num1 + num2;
    return (
    <div>
    Hello world, {data.name} Test {sum}
    <br/>
    your age is {data.age()}
    </div>
    ); // HTML (xml)
};

// Syntax 2
// const Test = () => {};
// export default Test;