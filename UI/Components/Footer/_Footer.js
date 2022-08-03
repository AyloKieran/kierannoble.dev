(function () {

    let template = `
        <footer class="footer">
            <!-- ko if: showSeperator -->
            <div class="seperator"></div>
            <!-- /ko -->
            <div class="logo logo--default"></div>
            <div class="footer__contact">
                <a href="mailto:howdy@kierannoble.dev">howdy@kierannoble.dev</a>
            </div>
            <div class="footer__contact-note">Feel free to drop me an email, I'd ❤️ to hear from you!</div>
            <div class="footer__socialLinks">
                <a href="https://www.linkedin.com/in/kierannoble/" class="socialLink">
                    <img class="socialLink__image" src="/assets/social/linkedin.svg" alt="LinkedIn">
                </a>
                <a href="https://twitter.com/aylokieran" class="socialLink">
                    <img class="socialLink__image" src="/assets/social/twitter.svg" alt="Twitter">
                </a>
                <a href="https://t.me/aylokieran" class="socialLink">
                    <img class="socialLink__image" src="/assets/social/telegram.svg" alt="Telegram">
                </a>
                <a href="mailto:howdy@kierannoble.dev" class="socialLink">
                    <img class="socialLink__image" src="/assets/social/email.svg" alt="Email">
                </a>
            </div>
        </footer>
    `;

    var name = utilities.componentNames.footer;

    ko.components.register(name, {

        template: template,

        viewModel: function (params) {
            var self = this;

            self.hasSelectedContent = params.data.hasSelectedContent;

            self.showSeperator = ko.pureComputed(function () {
                return !self.hasSelectedContent();
            });

        }

    });

}());