import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Grid2D = () => {
  const locationHash = useLocation().hash;

  useEffect(() => {
    if (locationHash) {
      setTimeout(function () {
        window.location.hash = "";
        window.location.hash = locationHash;
      }, 300);
    }
  }, [locationHash]);

  return (
    <React.Fragment>
      <div className="page-left-menu">
        <div className="page-title">
          Grid2D - 3D Object Recognition Algorithm
        </div>
        <div className="page-nav-content">
          <a href="#general">
            <div
              className={
                locationHash.includes("general")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              General
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#shape">
            <div
              className={
                locationHash.includes("shape")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3D Shape Processing
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#hash">
            <div
              className={
                locationHash.includes("hash")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              HASH ID Strength
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#object">
            <div
              className={
                locationHash.includes("object")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              3D Object Additional Properties
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="general">
          <div className="page-content-inner">
            <div className="page-content-title">General</div>
            <div className="page-content-text">
              Algorithm name: Grid2d, Author: Michael Co (3DPass Core developer
              and co-founder), Published: <Link to="https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">Dec 14, 2020</Link>
            </div>
            <div className="page-content-text">
              First of all, the hash calculated has to be reproducible i.e
              stable for different scans of the same object within a noise of
              scanning. We don't have any feedback to compare and get a single
              100% working hash from each one 3D scan automatically. So we need
              to get a sorted short list of hashes as a result to get user the
              opportunity picking up the most stable one. The hash ID will be
              considered stable if the hash value presents on the top of the
              list every time new scan of the same object's processed. The
              algorithm logic is flexible enough to adjust the definition level
              of processing to the 3D scanning resolution and accuracy, which
              might differ depending on the scanning device.
            </div>
            <div className="page-content-text">
              The simplest way to get some unique characteristics from the surface
              of the object is to cut it into N slices and process each of them
              separately. The problem, therefore, now turns into 2D. By means of
              combining results from N slices, it is possible to
              calculate the final hash.
            </div>
            <div className="page-content-subtitle">Standard Hardware</div>
            <ul className="page-content-text">
              <li>
                The object must be simply connected (i.e., without through holes)
              </li>
              <li>The object must not have the regular form</li>
              <li>The colors and textures are ignored</li>
            </ul>
          </div>
        </div>
        <div className="page-content-block" id="shape">
          <div className="page-content-inner">
            <div className="page-content-title">3D object shape processing</div>
            <div className="page-content-subtitle">
              1. The object orientation has to meet the following conditions:
            </div>
            <ul className="page-content-text">
              <li>
                The center of coordinates is at the center of mass of the object
              </li>
              <li>Cartesian coordinates coincide with main inertia vectors</li>
            </ul>
            <div className="page-content-text">
              In order to get it unambiguously the main inertia components have
              to be different, let say, by 10% (parameter #1 of algorithm).
              Objects like sphere or cylinder should be rejected. So, the axis X
              coincides with the inertia vector corresponded to maximum inertia
              component, next axis Y and last axis Z corresponded to minimum
              inertia component.
            </div>
            <div className="page-content-subtitle">
              2. Cutting the object with N planes
            </div>
            <div className="page-content-text">
              Let's cut the object by N planes uniformly spaced alongside the OX
              axis. Then either crosses of planes and object's surface produce N
              contours.
            </div>
            <div className="page-content-text">
              Drawing 1: Cutting the object with 3 planes:
            </div>
            <img
              className="page-img"
              src="/images/s_32.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">
              3. For each contour the following steps will be performed:
            </div>
            <div className="page-content-text">
              3.1. Scale the contour to fit a square having sides equal to
              maximum size of contour alongside X or Y coordinates.
            </div>
            <div className="page-content-text">
              3.2. Select the number of cells in the square MxM (parameter #2 of
              the algorithm). Let us assume M=8 (like a chess board)
            </div>
            <div className="page-content-text">
              3.3. Find the set E of cells containing our contour. Because of
              noise we add to this set not only cells that contour passes
              through but the neighboring as well. Cells should be added to E if
              the contour is close to grid vertices less than 10% of cell size,
              by example (parameter #3 of the algorithm).
            </div>
            <div className="page-content-text">
              Drawing 2: Set of cells allowed
            </div>
            <img
              className="page-img"
              src="/images/drawing_21.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              3.4. Generate all the possible polygons with vertices belonging to
              set E. Neighboring vertices have to be at a distance L, for
              example L=2 (parameter #4 of the algorithm). Vertices must not be
              close to each other at a distance less than L.
            </div>
            <div className="page-content-text">
              Drawing 3: Building a polygon
            </div>
            <img
              className="page-img"
              src="/images/drawing_31.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Down below are exposed two allowed polygons of the object
              represented in Drawing 1
            </div>
            <img
              className="page-img"
              src="/images/drawing_41.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              3.5. Calculate root mean square deviation (RMSD) from the polygon
              and the contour and do it for each polygon. In order to get it
              done we approximate the contour with splines and evaluate Q points
              uniformly spaced in approximating curve (parameter #5 of the
              algorithm). Also we need to evaluate Q points at the polygon.
              Spline approximation can be evaluated by splprep function from
              Python scipy package.
            </div>
            <div className="page-content-text">The RMSD is:</div>
            <img
              className="page-img"
              src="/images/rmsd1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Where Pi=(xi, yi) — point at countour, Ri — point at polygon.
            </div>
            <div className="page-content-text">
              3.6. Sort all the generated polygons by RMSD and take T best of
              them (parameter #6 of the algorithm).
            </div>
            <div className="page-content-subtitle">
              4. Perform cartesian product of all the best polygons from each
              slice.
            </div>
            <div className="page-content-text">
              Perform cartesian product of all the best polygons from each
              slice. The product of two polygons means concatenation of their
              points (coordinates of vertices).
            </div>
            <div className="page-content-text">For example, if:</div>
            <img
              className="page-img"
              src="/images/cartesian_11.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">We get:</div>
            <img
              className="page-img"
              src="/images/cartesian_21.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              So, we've got the input data for sha256. The last step is trivial.
            </div>
            <div className="page-content-subtitle">
              5. sha256 hashes creation
            </div>
            <div className="page-content-text">
              The output of Grid2d algorithm is a list of hashes sorted by its
              affinity to object's surface.
            </div>
            <div className="page-content-text">
              <Link to="/pass3d">Learn some examples and how to use the algorithm in practice</Link>..
            </div>
            <div className="page-content-text">
              <Link to="https://github.com/3Dpass/pass3d">pass3d</Link> is the application for Linux.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="hash">
          <div className="page-content-inner">
            <div className="page-content-title">HASH ID Strength</div>
            <div className="page-content-text">
              Since Hash ID is based on 3D object shape, its strength depends on
              how predictable the object shape is.
            </div>
            <div className="page-content-text">
              If an object had a ball shape, cube shape or some predictable and
              well-known-stuff- shape, then all of those seed-objects would give
              us weak strength HASH IDs. And most of them Grid2d is able to
              recognize and reject before the hash generating process got
              started.
            </div>
            <div className="page-content-text">
              If a random-shaped object was chosen like either a piece of
              natural rock or randomly deformed and hardened clay that has on
              its surface a lot of different turbulences, elevations and pits,
              elongation, needles and peaks, then it would give us a strong HASH
              ID.
            </div>
            <div className="page-content-text">
              If the object has a predictable shape it's recommended to use{" "}
              <Link to="/features#multiobject">multi-object options</Link> as 2FA to get more uniqueness to it. For
              example, the ball has the most predictable shape of all shapes in
              the world. But if the biometric data was put in addition to, the
              combination of "ball + biometric data" becomes very strong and non
              predictable one. The same way it might be leveraged some different
              properties of the object like weight, clarity, density, etc.
            </div>
            <div className="page-content-text">
              Hash ID strength, as well, depends on 3D scanning resolution
              leveraged for taking scans from the object. If 3D scanning had
              been performed by a High Definition scanner, 3D model would've
              followed the shape of the object surface quite close. And that
              quality allows for Grid2d to recognize lots of tiny little details
              that might differentiate the object from others. The higher
              quality of scan you take, the more HASH ID strength you can
              potentially get.
            </div>
            <div className="page-content-text">Some examples:</div>
            <img
              className="page-img img300"
              src="/images/rock1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <img
              className="page-img img300"
              src="/images/rock2.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <img
              className="page-img img300"
              src="/images/rock3.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <img
              className="page-img img300"
              src="/images/rock4.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <img
              className="page-img img300"
              src="/images/rock5.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="page-content-block" id="object">
          <div className="page-content-inner">
            <div className="page-content-title">
              3D Object Additional Properties
            </div>
            <div className="page-content-text">
              Besides 3D shape, any real world object has some unique additional
              properties which might help reliably to authenticate it by several
              sights. Most important of them are the measurable ones, such as:
              weight, density, clarity, hardness, coloring, owner's biometric
              data. And all of those properties can be revealed by lab
              measurements and scanning. Lab measurement equipment might
              represent smart devices (IoT) connected to 3DP network directly.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Grid2D;
