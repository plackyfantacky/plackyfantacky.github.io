const Main = (props) => {
    const { className = "flex-1", children } = props;
    let classNames = "flex-1" + (className ? " " + className : "");
    return (
        <main className={classNames}>
        {children}
        </main>
    )
}
export default Main;