# class MessageMailer < ActionMailer::Base

#   # Subject can be set in your I18n file at config/locales/en.yml
#   # with the following lookup:
#   #
#   #   en.message_mailer.contact_me.subject
#   #
#   def contact_me(message)
#     mail(to: "nicolas.esnis@gmail.com", body: message.body from: message.email)
#   end
# end


class MessageMailer < ActionMailer::Base
  default from: 'system@loudthinking.com'

  def contact_me(message)
    @recipient = 'nicolas.esnis@gmail.com'
    mail(to: @recipient,
         subject: "[Signed up] Welcome #{@recipient}")
  end
end
