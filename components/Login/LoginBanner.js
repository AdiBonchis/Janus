import React from 'react'

export default function LoginBanner() {
    return (
        <div className="login-banner">
            <h1>Login</h1>
            <img src="/images/banner_divider.png" alt="banner bg" className="banner-divider"/>
            <svg viewBox="0 0 100 25" className="wave-background">
                <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"/>
            </svg>
        </div>
    )
}
