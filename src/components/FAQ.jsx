import faq from '../assets/photo/faq.png';

const FAQ = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-5 p-5'>
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img src={faq} alt="FAQ" className="w-full" />
      </div>

      {/* FAQ Section */}
      <div className="join join-vertical w-full md:w-2/3">
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I borrow books from the library?
          </div>
          <div className="collapse-content">
            <p>You need to log in to your account, browse the available books, and click the "Borrow" button. The book will be added to your borrowed list.</p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            How long can I keep a borrowed book?
          </div>
          <div className="collapse-content">
            <p>The standard borrowing period is 14 days. You can extend it by requesting a renewal before the due date.</p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            What happens if I return a book late?
          </div>
          <div className="collapse-content">
            <p>Late returns may result in a fine of $1 per day. If a book is lost, you will be required to replace it or pay a replacement fee.</p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Can I reserve a book that is currently borrowed?
          </div>
          <div className="collapse-content">
            <p>Yes! You can place a reservation, and you will be notified when the book is available for pickup.</p>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            How do I donate books to the library?
          </div>
          <div className="collapse-content">
            <p>You can visit the library and submit a book donation form. The library staff will review and accept books based on their condition and relevance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
