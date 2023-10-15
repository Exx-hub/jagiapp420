function Modal() {
  return (
    <>
      <button
        className="btn btn-square bg-gray-900/70 border-none text-xl"
        onClick={() => {
          const modalEl = document.getElementById("my_modal_1") as HTMLDialogElement;

          if (modalEl) {
            modalEl.showModal();
          }
        }}
      >
        🏆
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box modalBg text-white">
          <div className="absolute right-3 top-3">
            <form method="dialog">
              <button className="">❌</button>
            </form>
          </div>
          <h3 className="font-bold text-xl">Paborito Leaderboard 💯</h3>
          <p className="text-lg">🥇 Kare kare</p>
          <p className="text-lg">🥈 Kimchijjigang Gang</p>
          <p className="text-lg">🥉 Tinola</p>
          <br></br>
          <p className="ml-1 font-semibold">Honorable Mentions:</p>
          <p className="">🎖️ Kimchi Jjigae</p>
          <p className="">🎖️ Pininyahang Manok</p>

          <div className="mt-5 text-center">
            <p>(Updated Weekly!)</p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
