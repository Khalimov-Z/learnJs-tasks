const showNotification = (styles) => {
    const notification = document.createElement('div')
    notification.innerHTML = styles.html
    notification.classList.add('notification')
    notification.style.top = `${styles.top}px`
    notification.style.right = `${styles.right}px`
    document.body.prepend(notification)
    setTimeout(() => {
        notification.style.display = 'none'
    }, 1500)
}

showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
});
