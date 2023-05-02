import "../styles/features.css";

import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Pass3D = () => {
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
        <div className="page-title">Pass3d Recognition Tool</div>
        <div className="page-nav-content">
          <a href="#hash">
            <div
              className={
                locationHash.includes("hash")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Hash ID
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#params">
            <div
              className={
                locationHash.includes("params")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Parameters Adjustment
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#overall">
            <div
              className={
                locationHash.includes("overall")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Overall recommendations
              <div className="page-nav-circle"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-block first-page-block" id="hash">
          <div className="page-content-inner">
            <div className="page-content-title">Hash ID</div>
            <div className="page-content-text">
              <Link to="https://github.com/3Dpass/pass3d">Download</Link> pass3d release or build it yourself from the source code.
              Requirements: OS Linux
            </div>
            <div className="page-content-text">
              <Link to="/grid2d">Grid2d</Link> is the first recognition algorithm <Link to="https://michael25651209.medium.com/how-to-calculate-a-hash-of-3d-object-1e0e3669322d">suggested</Link> by Michael Co.
              Join the discussion <Link to="https://github.com/3Dpass/pass3d/discussions">here</Link> Make your suggestions about new
              algorithms to add and get rewarded from <Link to="/coin#distribution-contribution">3DPass contribution
              program</Link>.
            </div>
            <div className="page-content-text">
              The input is a 3D scan/model of the object (.stl or .obj formats
              required). For example, you can download these two ones: <a href="/assets/pir1_obj.zip">pir1.obj</a>{" "}
              and <a href="/assets/pir2_obj.zip">pir2.obj</a>
            </div>
            <div className="page-content-text">
              The output is a top10 hashes list inherent to the object shape
            </div>
            <pre className="main-pre">
              {`
USAGE:
pass3d --algo --grid --infile --sect
OPTIONS:
-a, --algo 3d hash algorithm Algorithm. Supported algorithms: Grid2d
-g, --grid Number of cells in Grid2d algorithm
-i, --infile The path to the file to read
-s, --sect Number of sections in Grid2d algorithm
`}
            </pre>
            <div className="page-content-text">
              The object shape is considered to be recognized if there is at
              least one hash-value match among two different processing results.
              We have to process two or more different 3D scans of the same
              object and to compare the top10 results. We should use exactly the
              same parameters every time. It's recommended to use the same
              equipment, as well.
            </div>
            <div className="page-content-text">
              For example, we have two different 3D scans pir1.obj and pir2.obj
              of the same real physical object. In order to run the processing
              and create hashes from the first scan we have to run a command
              like this:
            </div>
            <pre className="main-pre">
              {`
/pass3d -i pir1.obj -a grid2d -g 8 -s 68
`}
            </pre>
            <div className="page-content-text">
              The output will be like this:
            </div>
            <pre className="main-pre">
              {`
~/Desktop/3dpass$ ./pass3d -i pir1.obj -a grid2d -g 8 -s 68
Select top 10 hashes
"9bccac20a0586638cc74a2ff295c987d470794f24f008b02ce02643d0281f03f"
"11c41b6b30b191a2d61ae803d48cc42e83f9fdaac730665b24e3272672133efd"
"6f37f712139012d1c118cadea3a44b0535fa6b4b1272b1da49af3eb6498011f6"
"4453ed1aa4dabe394a0cedd79f8edb0940fb43a5558fbfa89ce56dad3fc8876c"
* --> "aa4019c8c160da9d2af69edc19589aabd925bc696966b967f92b71947f75f8f0"
"090ae6b23e2192fa4c2fb40cddad6e8537e2b437c49ff9fb227cf32c4e4085fc"
** --> "dd227121b91adcb5beabb0be9412613ebdfde8c5660301eb17583fa644b8793d"
"880cfda2b4811bf2ff1fe3ab92b38e64fc134d98c3dc8764eb8641a477b77a47"
"15cc9ef656a14c9ffde999512d11bd81cd5eaedaa81139a61847d470ea01043b"
*** --> "543e1c3929ea810f4e8c7cfc27f0b60df21a9374089f2278617dae327e32b034"
`}
            </pre>
            <div className="page-content-text">
              The second scan processing outcome gives us this:
            </div>
            <pre className="main-pre">
              {`
~/Desktop/3dpass$ ./pass3d -i pir2.obj -a grid2d -g 8 -s 68
Select top 10 hashes
"72592f8f6ea67c60ca7d9c7683256c3636a30be464952eb82996bff52ca4415d"
"3720e731b9aa04b08d83de34a796cbc389fce2c62365c68206c5610106db053d"
"a65008cdc77f72b47eda70e7c2eb57f93e4fffde5a5356549ac7dbf5d422dffa"
"5930d4a4a98ddff21997daaa8410b151f85dcdb7bfe6b0fb1a05af0e99c276fc"
"6846a36abb6dc50df6845627e6553ede8337e7350254ae8d02b7b7a696c79192"
"b20cf89afb10f14795afe517c82d7f6185da840e6035c48b488792e2df61846d"
* --> "aa4019c8c160da9d2af69edc19589aabd925bc696966b967f92b71947f75f8f0"
"deb83d22570bfc07b8881618dc34a6624616521475bac17798b7348cf6684fd1"
** --> "dd227121b91adcb5beabb0be9412613ebdfde8c5660301eb17583fa644b8793d"
*** -- > "543e1c3929ea810f4e8c7cfc27f0b60df21a9374089f2278617dae327e32b034"
`}
            </pre>
            <div className="page-content-text">
              Within those two processing results above there are three of top10
              hash-values matched (they are marked as *, **, ***) So, we have
              the object recognized.
            </div>
            <div className="page-content-text">
              If we had three or more different 3D scans of the object
              processed, we could've picked up the most stable one Hash ID,
              meaning it's definitelly existing among the top10 hashes of every
              3D scan we have. The more scans you process the more likely the
              best stable Hash ID you get. But practically it's enough to do 3-5
              scans to choose. Sometimes you have no choice because there is
              only one hash is matched. If you have your 3D scanns in pretty
              good quality and it's assuming that the next ones are goint to
              have the similar, then you can pick up all of the hases matched.
              In our example it would be a combitation of theese three hashes:
            </div>
            <pre className="main-pre">
              {`
* --> "aa4019c8c160da9d2af69edc19589aabd925bc696966b967f92b71947f75f8f0"
** --> "dd227121b91adcb5beabb0be9412613ebdfde8c5660301eb17583fa644b8793d"
*** -- > "543e1c3929ea810f4e8c7cfc27f0b60df21a9374089f2278617dae327e32b034"
`}
            </pre>
          </div>
        </div>
        <div className="page-content-block" id="params">
          <div className="page-content-inner">
            <div className="page-content-title">Parameters Adjustment</div>
            <div className="page-content-text">
              These are two key parameters we need to adjust in order to create
              the best possible Hash ID depending on 3D scans quality.
            </div>
            <pre className="main-pre">
              {`
-g, --grid Number of cells in Grid2d
-s, --sect Number of cross-sections in Grid2d
`}
            </pre>
            <div className="page-content-subtitle">
              Number of cells parameter -g:
            </div>
            <div className="page-content-text">
              Grid (-g) is the parameter which is about to help us to adjust the
              recognition algorithm to the particular 3D scan quality. The
              higher scan quality we get, the higher number of cells in the row
              we can set up for the processing. According to the Grid2d
              algorithm, by means of increasing number of cells, we are
              following a 3D scan cross-section contour more closely to the
              actual curve. That means that more precisely we can recognize the
              object shape. But, simultaneously, we're keeping less space for
              some error in the future. It's all about the balance between
              accuracy of the shape recognition and the ability to get the
              stable Hash ID.
            </div>
            <div className="page-content-text">
              Low definition scanners, especially smartphone apps, gives us a
              lot of error between two random scans taken from the same object.
              But High definition and professional ones might roll out not much
              than 3 micro meter error. So, it is recommended that we get
              several 3D scans made by the same equipment and then set the
              number of cells as hight as possible, provided it still rolls out
              successful recognition results. That is going to be the best set
              up. It might takes some attempts to adjust the optimal (-g)
              parameter’s value according to the scan quality.
            </div>
            <img
              className="page-img"
              src="/images/6x6grid1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">grid 6x6</div>
            <div className="page-content-text">
              Parameter -g=6 (6x6 grid) example
            </div>
            <img
              className="page-img"
              src="/images/20x20grid1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">grid 20x20</div>
            <div className="page-content-text">
              Parameter -g=20 (20x20 grid) example
            </div>
            <div className="page-content-subtitle">
              Number of cross-sections parameter -s:
            </div>
            <div className="page-content-text">
              The more cross-sections we set, the more hash strength we get.
              Each cross-section represents a unique contour which is,
              basically, the unique seed data the future hash would be created
              from. If we have captured more unique distinctions from the object
              shape, it would give us higher hash strength. For example, if we
              had set up just one cross-section (-s=1), we would leverage only
              one contour of the object which is really small amount of unique
              data. And it’s definitely not enough to describe the entire object
              shape. It’s like if we would try to describe the hole apple shape
              having just one slice of it. So, if you’re interested in
              recognition the entire object rather than a few slices of it, it’s
              recommended that you set up at least 100 cross-sections (-s=100).
            </div>
            <div className="page-content-text">Parameter -s=3 example:</div>
            <img
              className="page-img"
              src="/images/s_31.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="page-content-block" id="overall">
          <div className="page-content-inner">
            <div className="page-content-title">Overall recommendations</div>
            <ul className="page-content-text">
              <li>
                We should use exactly the same set of parameters for the same
                object while processing. Otherwise, we will not succeed in
                recognition;
              </li>
              <li>
                It's recommended to set up the grid parameter (-g) value
                according to the lowest scan definition we expect to process in
                the future. Such values as -g=6 or -g=7 (6x6 and 7x7 grid) would
                be recommended for smartphones and tablets;
              </li>
              <li>
                It's recommended that we set up the number of cross-sections at
                least 100 (-s=100) in terms of leveraging the entire object
                shape instead of just a few slices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pass3D;
