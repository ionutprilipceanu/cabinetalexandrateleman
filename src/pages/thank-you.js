import React from "react"
import img from "..//..//static/images/favicon.png"
import { Link } from "gatsby"
import "..//components/layout.css"

const ThankYou = () => {
  return (
    <content>
      <div className="contentStyled">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "7rem",
            margin: "2.5% auto",
          }}
        >
          <img src={img} />
        </div>
        <h1
          style={{
            margin: "0 auto",
            padding: "1rem auto",
            borderBottom: "1px solid #c7e9ff",
          }}
        >
          Submit-ul tău a fost ca o rachetă!
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem auto",
            padding: "1rem auto",
            width: "100%",
            fontSize: "1rem",
          }}
        >
          Acum sunt pe urmele tale și voi răspunde cât mai rapid posibil. Stai
          cu ochii pe inbox sau telefon.
        </p>

        <Link to="/" style={{ margin: "0 auto 1rem", width: "75%" }}>
          <button
            variant="primary"
            type="submit"
            style={{
              fontSize: "14px",
              backgroundColor: "#282c34",
              borderColor: "black",
              border: "2px solid black",
              color: "#fff",
              padding: "0.25rem 0.5rem",
              borderRadius: "5px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            Acasă
          </button>
        </Link>
      </div>
    </content>
  )
}

export default ThankYou
