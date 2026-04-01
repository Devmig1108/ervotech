<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->from('website@ervotechep.com', 'Ervotech Website')
                    ->replyTo($this->data['email'], $this->data['name'])
                    ->subject('New Lead from ' . $this->data['name'])
                    ->view('emails.contact') // Ensure you have resources/views/emails/contact.blade.php
                    ->with(['data' => $this->data]);
    }
}