const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} custom-btn btn smoothscroll mt-5`}
        {...props}
    />
)

export default Button
