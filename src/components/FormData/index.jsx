const FormData = ({ setUser, user, eventListeners}) => {



  return (

    <form onSubmit={eventListeners} id="form" method="POST" action="">
      <label>Ваши данные:</label>
      <div className="form-group">
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="Имя и Фамилия"
          required
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-group">
        <input
          id="phone"
          type="text"
          name="phone"
          className="form-control"
          placeholder="Телефон"
          value={user.phone}
          onChange={(e) => {
            setUser({
              ...user,
              phone: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-group">
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={user.email}
          required
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Продукт:</label>
        <select
          onChange={(e) => {
            setUser({
              ...user,
              product: e.target.value,
            });
          }}
          value={user.product}
          id="product"
          name="product"
          className="form-control"
        >
          <option value="course-html">Курс по верстке</option>
          <option value="course-js">Курс по JavaScript</option>
          <option value="course-vue">Курс по VUE </option>
          <option value="course-php">Курс по PHP</option>
          <option value="course-wordpress">Курс по WordPress</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Оформить заявку
        </button>
      </div>
    </form>
  );
};

export default FormData;
