const Hero = () => {
    return (
        <>
            <div className="hero">
                <h1 className="animate__animated animate__fadeInDown animate__faster animate__delay-1s">Connect Help Centre</h1>
                <h2 className="animate__animated animate__fadeIn animate__faster animate__delay-2s">Hi, how can we help you?</h2>
                <input className="animate__animated animate__fadeInUp animate__fast animate__delay-2s" type="text" placeholder="Search helpful topics" />
            </div>
        </>
    );
}

export default Hero;