$(function() {

    var currentStep = 1;

    function checkTerms() {
        var $submitBtn = $('#submit-req');
        if ($('#terms').get(0).checked) {
            $($submitBtn).removeAttr('disabled');
        } 
    };

    checkTerms();

    function popUp() {  
            window.open("terms.html", "yyyyy", "width=480,height=360, resizable=no,toolbar=no, menubar=no,location=no, status=no");
            return false;
    };

    function showBonus() {
        var $hiddenDiv = $('.bonus-code');
            if (this.checked) {
                $($hiddenDiv).slideDown();
            } else {
                $($hiddenDiv).slideUp();
            }
    };

    showBonus();

    function next() {
        var input = $('#content-1 span + input'),
            terms = $('#terms'),
            valid = input.filter('.valid').length === input.length && terms.is(':checked');

        if (input && !valid ) {
                $('input:not(.valid) ~ .invalid').fadeIn('medium').css('display', 'inline-block');
                return;
            } else {
                $('#content-' + nextStep).fadeOut('medium', function() {
                    currentStep++;
                    $('#content-' + nextStep).fadeIn('medium');
                });  
            }        
    };

    function validateEmail() {
        var email = '#email',
            $email = $(email);
            valMail = $email.val();
        var passValue = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ( !passValue.test(valMail) ) {
            $(email + ' + .invalid').fadeIn('medium').css('display', 'inline-block');
        } else {
            $($email).addClass('valid');
            $(email + ' + .invalid').fadeOut('medium');
        }
    };

    function validateFirstName() {
        var first_name = '#first_name',
            $first_name = $(first_name),
            nameLength = $first_name.val().length <= 0;
            
        if (nameLength) {
            $(first_name + ' + .invalid').fadeIn('medium').css('display', 'inline-block');
        } else {
            $($first_name).addClass('valid');
            $(first_name + ' + .invalid').fadeOut('medium');
        }
    };

    function validateUserName() {
        var userName = '#username',
            $userName = $(userName),
            minLength = $userName.val().length <= 3,
            maxLength = $userName.val().length >= 13;
        
        if (minLength || maxLength) {
            $(userName + ' + .invalid').fadeIn('medium').css('display', 'inline-block');
        } else {
            $($userName).addClass('valid');
            $(userName + ' + .invalid').fadeOut('medium');
        }
    };

    function validatePassword() {
        var password = '#password',
            $password = $(password),
            valPass = $password.val();
            passValue = new RegExp("(?=^.{6,12}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+-=}{&quot;&quot;:;'?/&gt;.&lt;,]).*$");

        if ( !passValue.test(valPass) ) {
            $(password + ' + .invalid').fadeIn('medium').css('display', 'inline-block');
        } else {
            $($password).addClass('valid');
            $(password + ' + .invalid').fadeOut('medium');
        }
    };

    function attachHandlers() {
        var $email = $('#email'),
            $first_name = $('#first_name'),
            $username = $('#username'),
            $password = $('#password');

        $email.on('blur keydown', validateEmail);
        $first_name.on('blur keydown', validateFirstName);
        $username.on('blur keydown', validateUserName);
        $password.on('blur keydown', validatePassword);
        $('.popup').on('click', popUp);
        $('.next-step').on('click', next);
        $('#bonus-check').on('click', showBonus);
    };

    attachHandlers();

});