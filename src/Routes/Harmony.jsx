import { useContext, useEffect } from 'react';
import { ProjectContext } from '../Context';

function Harmony() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('harmony');
    }, []);

    return (
        <main className="layout" data-bind="component: koComponents.pages.harmony, css: { 'hidden': selectedContent() != 'harmony' }">
            <header className="section section--primary section--centered">
                <div className="content layout__column layout__column--ignoreMobile layout--small">
                    <div className="section__title">
                        {/* <img src="assets/projects/harmony/logo.svg" className="section__logo" width="200px" alt="Harmony Logo" loading="lazy" decoding="async" /> */}
                    </div>
                    <h2 className="section__subtitle">An E-Commerce platform for the modern music industry</h2>
                    <h3>This project is the outcome of <a href="https://www.iweb.co.uk/">iWeb</a>'s client briefing during an
                        assessment within the second year of my Computer Science degree.</h3>
                </div>
            </header>
            <section className="section section--secondary">
                <div className="content layout layout__column layout--small">
                    <span className="section__title">Process</span>
                    <p className="section__subtitle">At the start of this task, the team and myself decided on how to approach
                        the different stages in the
                        lifecycle of a project and its development - along with the client and our project supervisor, we
                        agreed so that we would follow the steps outlined below:</p>
                    <div className="section__image">
                        {/* <img className="image no-shadow" src="/assets/projects/harmony/process.webp" loading="lazy" decoding="async" /> */}
                    </div>
                    <p>Surrounding each of these stages we maintained communication both within our team, as well as with
                        our project supervisor and the client.</p>
                    <p>We implemented an iterative approach to the process which allowed us to all to air our opinions and
                        move forwards with the project whilst allowing for ideas and designs to change freely and quickly.
                    </p>
                </div>
            </section>
            <section className="section section--centered">
                <div className="content layout layout__column">
                    <span className="section__title">Initial Designs</span>
                    <div className="section__image" data-bind="click: showInitialDesignsSlideshow">
                        {/* <img className="image" src="/assets/projects/harmony/initial-designs.webp" loading="lazy" decoding="async" /> */}
                        <span className="image__action"></span>
                        <span className="image__action-text"></span>
                    </div>

                    <p className="section__subtitle">These wireframe designs were received very well by the client and were
                        praised for them looking and
                        feeling like something that could be implemented into a real and professional looking product that
                        the client would actually make.</p>
                    <p>Ultimately, we collectively decided that we would take a hybrid
                        between the two wireframe designs and create a product that implemented the 'best' parts from each
                        design into the UI/UX prototype.</p>
                </div>
            </section>
            <section className="section section--tertiary section--right">
                <div className="content layout layout__column layout--small">
                    <div className="layout layout__row layout__row--equal">
                        <div>
                            <div className="section__image" data-bind="click: showPrototypeSlideshow">
                                {/* <img className="image" src="/assets/projects/harmony/prototype-ui.webp" loading="lazy" decoding="async" /> */}
                                <span className="image__action"></span>
                                <span className="image__action-text"></span>
                            </div>

                        </div>
                        <div className="layout layout__column layout--small">
                            <span className="section__title">UI/UX Prototype</span>
                            <div className="section__subtitle">After the meeting with the client, we implemented the initial
                                version of our UI/UX Prototype.</div>
                            <p>We tried to play to the strenghs of the team, and as Sam was the member with the most
                                experience in UI Design, he was tasked with implementing the prototype of the core layout
                                for the web app as well as designing some cards for displaying information such as:</p>
                            <ul className="layout layout__column layout--small">
                                <li>Album listings</li>
                                <li>Event listings</li>
                                <li>Merch listings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--secondary">
                <div className="content layout layout__column layout--small">
                    <span className="section__title">Feature Development</span>
                    <p className="section__subtitle">Once we had designs that were approved by both the client and the project
                        supervisor, we started
                        to take these designs which up until now were static pages and start to build a data framework
                        around it. For this, I took the lead as I have the most experience in backend development.</p>
                    <p>I started by taking the design and breaking the elements into distinct components, such as buttons,
                        navigation items, footers (etc) and converting them, so they are reusable and extensible throughout
                        the application. Once this had been completed I could move onto creating a data structure for the
                        application.</p>
                    <p>As this web application is primary used for creating a cart and ordering music from the store, the
                        data for the music had to be organised carefully to allow for a few key pieces of functionality:
                        each release can have different release types (CD, Vinyl, Digital), each of which can have many
                        groupings within them, such as a CD release may have multiple discs. Similarly, within each of these
                        discs (if they exist), there can be many tracks, which may be different to a track on another release
                        type. This problem is compounded by the functionality that links merch to album listings and their
                        tracks.</p>
                    <p>Throughout this process we kept in contact with the client to ensure that they were happy with the
                        progress being made and so that we could receive relevant feedback and make changes with the 8 weeks
                        that we had to complete this project from conception to final delivery.</p>
                </div>
            </section>
            <section className="section section--primary section--centered">
                <div className="content layout layout__column layout--small">
                    <span className="section__title">Final Product</span>
                    <a href="https://harmony.aylo.net/"><span className="section__subtitle">View Here</span></a>
                    <div className="section__image" data-bind="click: showFinalSlideshow">
                        {/* <img className="image" src="/assets/projects/harmony/final-product-1.webp" loading="lazy" decoding="async" /> */}
                        <span className="image__action"></span>
                        <span className="image__action-text"></span>
                    </div>
                </div>
                <p>Ultimately, this project received a grade of 96% (1st), which is accredible in no small part to the
                    great team that we had - our attitudes to succeed and the love and passion that we all had for the
                    project was noted by the client who congratulated us on creating a project that functions the way
                    that it does so quickly and professionally. </p>
                <p>
                    The team for this project were:
                </p><ul>
                    <li>Sam Palmer - <a href="https://github.com/samp">@samp</a></li>
                    <li>Nash Willok - <a href="https://github.com/NashWillock">@NashWillock</a></li>
                    <li>Ryan Jelf - <a href="https://github.com/RyanJelf">@RyanJelf</a></li>
                </ul>
                <p></p>
            </section>
        </main>
    );
}

export default Harmony