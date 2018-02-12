class MessageMailer < ActionMailer::Base

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact_me.subject
  #
  def contact_me(message)
    mail(to: "nicolas.esnis@gmail.com", body: message.body from: message.email)
  end
end

