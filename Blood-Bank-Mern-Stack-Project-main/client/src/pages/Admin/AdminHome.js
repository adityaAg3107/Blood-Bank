import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>

            Welcome to the admin panel! This is where you can manage all aspects of your web project. You can read and manage entries of the donors, hospitals and orgenizations respectively.

            To get started, click on the "Donors" tab. This will take you to the collections of all donors and their activities. You can delete any existing donor if you want.
            Click on the "Hospitals" tab. This will take you to the collections of all hospitals and their activities. You can delete any existing donor if you want.
            Click on the "Organizations" tab. This will take you to the collections of all organizations and their activities. You can delete any existing donor if you want.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo animi blanditiis incidunt dicta quia, quibusdam facere corporis! Dolores, reprehenderit cum sed repellat 
            laudantium architecto natus est nostrum accusamus, odio aspernatur minima fugiat quam molestiae nisi. Temporibus impedit dolorem quia. 
            Distinctio modi non excepturi illo odio voluptatum quae nostrum a temporibus sequi! Explicabo, quasi consequatur ad qui quos labore distinctio voluptates alias nostrum 
            ab dicta aspernatur molestias adipisci quibusdam error ipsa. Totam, tenetur dolores eaque tempora officiis deserunt assumenda?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
