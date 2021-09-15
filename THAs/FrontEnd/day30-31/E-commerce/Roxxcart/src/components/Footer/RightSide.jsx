import React from "react";
import { Link } from "./LeftSide";
import "./css/Footer.css";

function RightSide() {
  return (
    <section className="right-side">
      <table>
        <thead>
          <tr>
            <th>Shopping online</th>
            <th>Information</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Order Status",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Gift Cards",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "store@roxxcart.com",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Shipping and Delivery",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Find Store",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Hotline: +123456",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Returns",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Newsletter",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Payment Options",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Become a member",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Contact us",
                }}
              />
            </td>
            <td>
              <Link
                link={{
                  url: "#",
                  name: "Site feedback",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RightSide;
