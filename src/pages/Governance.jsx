import "../styles/features.css";

import React, { useEffect } from "react";

import Table from "../components/Table";
import { Link, useLocation } from "react-router-dom";

const Governance = () => {
  const locationHash = useLocation().hash;
  const tallyngData = [
    ["Public", "Positive Turnout Bias (Super-Majority Approve)"],
    [
      "Council (Complete agreement)",
      "Negative Turnout Bias (Super-Majority Against)",
    ],
    ["Council (Majority agreement) 32", "Simple Majority soon"],
  ];
  const voluntaryData = [
    [0, 0.1, 0],
    [1, 1, 28],
    [2, 2, 56],
    [4, 3, 112],
    [8, 4, 224],
    [16, 5, 448],
    [32, 6, 896],
  ];
  const round1Data = [
    [".", "A", "B", "C", "D", "E"],
    ["Peter", ".", "X", "X", "X", "X"],
    ["Alice", ".", "X", ".", ".", "."],
    ["Bob", ".", ".", "X", "X", "X"],
    ["Kelvin", "X", ".", "X", ".", "."],
    ["Total", "2", "1", "3", "2", "2"],
  ];
  const round2Data = [
    [".", "A", "B", "C", "D", ""],
    ["Peter", "X", "X", ".", ".", ""],
    ["Alice", "X", "X", ".", ".", ""],
    ["Bob", "X", "X", "X", "X", ""],
    ["Kelvin", "X", "X", ".", ".", ""],
    ["Total", "4", "4", "1", "1", ""],
  ];

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
        <div className="page-title">Open Governance in 3DPass</div>
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
          <a href="#democracy">
            <div
              className={
                locationHash.includes("democracy")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Democracy
              <div className="page-nav-circle"></div>
              <div className="page-nav-line democracy-line"></div>
            </div>
          </a>
          <a href="#referenda">
            <div className="page-nav-inside">
              Referenda
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#how-to-fetch-referendum-result">
            <div className="page-nav-inside">
              How to fetch the result
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#how-to-get-voting-history">
            <div className="page-nav-inside">
              How to get the voting history
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#how-to-get-detailed-voting-data">
            <div className="page-nav-inside">
              How to get detailed voting data 
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#council">
            <div
              className={
                locationHash.includes("council")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Council
              <div className="page-nav-circle"></div>
              <div className="page-nav-line council-line"></div>
            </div>
          </a>
          <a href="#referendum-proposed-by-council">
            <div className="page-nav-inside">
              Referendum proposed by Council
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#council-elections">
            <div className="page-nav-inside">
              Council elections
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#how-to-fetch-elections-data">
            <div className="page-nav-inside">
              How to fetch the elections data 
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#how-to-vote">
            <div className="page-nav-inside">
              How to vote for a candidate
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#how-to-submit-candidacy">
            <div className="page-nav-inside">
              How to submit a candidacy
              <div className="inside-nav-circle"></div>
            </div>
          </a>
          <a href="#treasury">
            <div
              className={
                locationHash.includes("treasury")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Treasury
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#technical">
            <div
              className={
                locationHash.includes("technical")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Technical Committee
              <div className="page-nav-circle"></div>
            </div>
          </a>
          <a href="#fellowship">
            <div
              className={
                locationHash.includes("fellowship")
                  ? "one-page-nav active"
                  : "one-page-nav"
              }
            >
              Fellowship
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
              3Dpass uses a sophisticated self governance mechanism that allows
              it to evolve gracefully overtime at the ultimate behest of its
              assembled stakeholders. The stated goal is to ensure that the
              majority of the stake can always command the network.
            </div>
            <div className="page-content-text">
              3Dpass decentralised governance system is comprised of three main
              components:
            </div>
            <ul className="page-content-text">
              <li>
                <strong>Council</strong> - An approval-voted, elected executive "government" to
                manage parameters, admin and spending proposals.
              </li>
              <li>
                <strong>Technical Committee (TC)</strong> - A technocratic committee to manage the {" "}
                <Link to="/forkless-upgrade">forkless online upgrade</Link> timelines.
              </li>
              <li>
                <strong>Referenda</strong> - A general voting system for everything else which
                rewarded long-term stakeholders with increased influence.
              </li>
            </ul>
            <div className="page-content-text">
              In order to do that, the network brings together various novel
              mechanisms, including an amorphous state-transition function
              stored on-chain and defined in a platform-neutral intermediate
              language (i.e. <Link to="/forkless-upgrade#wasm">WebAssembly</Link>) and several on-chain voting mechanisms
              such as referenda with adaptive super-majority thresholds and
              batch approval voting. All changes to the protocol must be agreed
              upon by stake-weighted referenda.
            </div>
            <div className="page-content-text">
              The basement of the governance mechanism was inherited from
              Substrate, Polkadot and Kusama. Follow <Link to="https://wiki.polkadot.network/docs/learn-governance">their original
              documentation</Link> as a reference.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="democracy">
          <div className="page-content-inner">
            <div className="page-content-title">Democracy</div>
            <div className="page-content-text">
              3Dpass has implemented <Link to="https://github.com/paritytech/substrate/tree/master/frame/democracy">Democracy</Link> pallet using <Link to="https://github.com/paritytech/substrate/tree/master/frame/referenda">Referenda</Link> trait as a
              voting system.
            </div>
            <div className="page-content-text">
              To make any changes to the network, the idea is to compose active
              token holders and the council together to administrate a network
              upgrade decision. No matter whether the proposal is proposed by
              the public (token holders) or the council, it finally will have to
              go through a referendum to let all holders, weighted by stake,
              make the decision.
            </div>
            <div className="page-content-subtitle" id="referenda">Referenda</div>
            <div className="page-content-text">
              Referenda are simple, inclusive, stake-based voting schemes. Each
              referendum has a specific proposal associated with it that takes
              the form of a privileged function call in the runtime (that
              includes the most powerful call: set_code, which can switch out
              the entire code of the runtime, achieving what would otherwise
              require a "hard fork").
            </div>
            <div className="page-content-text">
              Referenda are discrete events, have a fixed period where voting
              happens, and then are tallied and the function call is made if the
              vote is approved. Referenda are always binary; your only options
              in voting are "aye", "nay", or abstaining entirely.
            </div>
            <div className="page-content-text">
              Referenda can be started in one of several ways:
            </div>
            <ul className="page-content-text">
              <li>Publicly submitted proposals;</li>
              <li>
                Proposals submitted by the council, either through a majority or
                unanimously;
              </li>
              <li>
                Proposals submitted as part of the enactment of a prior
                referendum;
              </li>
              <li>
                Emergency proposals submitted by the Technical Committee and
                approved by the Council.
              </li>
            </ul>
            <div className="page-content-text">
              All referenda have an enactment delay associated with them. This
              is the period between the referendum ending and, assuming the
              proposal was approved, the changes being enacted.
            </div>
            <div className="page-content-text">
              Referenda is considered baked if it is closed and tallied. Again,
              assuming the proposal was approved, it would be scheduled for
              enactment. Referenda is considered unbaked if it is pending an
              outcome, i.e. being voted on.
            </div>
            <div className="page-content-text">
              For the first two ways that a referendum is launched, this is a
              fixed time of 28 days. For the third type, it can be set as
              desired. Emergency proposals deal with major problems with the
              network that need to be "fast-tracked". These will have a shorter
              enactment time.
            </div>
            <div className="page-content-subtitle">Proposing a Referendum</div>
            <div className="page-content-subtitle">Public Referenda</div>
            <div className="page-content-text">
              Anyone can propose a referendum by depositing the minimum amount
              of tokens for a certain period (number of blocks). If someone
              agrees with the proposal, they may deposit the same amount of
              tokens to support it - this action is called endorsing. The
              proposal with the highest amount of bonded support will be
              selected to be a referendum in the next voting cycle.
            </div>
            <div className="page-content-text">
              Note that this may be different from the absolute number of
              endorsements; for instance, three accounts bonding 20 P3D each
              would "outweigh" ten accounts bonding a single P3D each.
            </div>
            <div className="page-content-text">
              The bonded tokens will be released once the proposal is tabled
              (that is, brought to a vote).
            </div>
            <div className="page-content-text">
              There can be a maximum of 100 public proposals in the proposal
              queue.
            </div>
            <div className="page-content-subtitle">Council Referenda</div>
            <div className="page-content-text">
              Unanimous Council - When all members of the council agree on a
              proposal, it can be moved to a referendum. This referendum will
              have a negative turnout bias (that is, the smaller the amount of
              stake voting, the smaller the amount necessary for it to pass -
              see Adaptive Quorum Biasing).
            </div>
            <div className="page-content-text">
              Majority Council - When agreement from only a simple majority of
              council members occurs, the referendum can also be voted upon, but
              it will be majority-carries (51% wins).
            </div>
            <div className="page-content-text">
              There can only be one active referendum at any given time, except
              when there is also an emergency referendum in progress.
            </div>
            <div className="page-content-subtitle">Voting Timetable</div>
            <div className="page-content-text">
              Every 28 days, a new referendum will come up for a vote, assuming
              there is at least one proposal in one of the queues. There is a
              queue for Council-approved proposals and a queue for publicly
              submitted proposals. The referendum to be voted upon alternates
              between the top proposal in the two queues.
            </div>
            <div className="page-content-text">
              The "top" proposal is determined by the amount of stake bonded
              behind it. If the given queue whose turn it is to create a
              referendum that has no proposals (is empty), and proposals are
              waiting in the other queue, the top proposal in the other queue
              will become a referendum.
            </div>
            <div className="page-content-text">
              Multiple referenda cannot be voted upon in the same period,
              excluding emergency referenda. An emergency referendum occurring
              at the same time as a regular referendum (either public- or
              council-proposed) is the only time that multiple referenda will be
              able to be voted on at once.
            </div>
            <div className="page-content-subtitle">Voting on a referendum</div>
            <div className="page-content-text">
              Every 28 days, a new referendum will come up for a vote, assuming
              there is at least one proposal in one of the queues. There is a
              queue for Council-approved proposals and a queue for publicly
              submitted proposals. The referendum to be voted upon alternates
              between the top proposal in the two queues.
            </div>
            <div className="page-content-text">
              In order to vote, a voter generally must lock their tokens up for
              at least the enactment delay period beyond the end of the
              referendum. This is in order to ensure that some minimal economic
              buy-in to the result is needed and to dissuade vote selling.
            </div>
            <div className="page-content-text">Example:</div>
            <div className="page-content-text">
              {
                "Peter: Votes No with 10 P3D for a 128 week lock period => 10 x 6 =60 Votes"
              }
            </div>
            <div className="page-content-text">
              {
                "Logan: Votes Yes with 20 P3D for a 4 week lock period => 20 x 1 = 20 Votes"
              }
            </div>
            <div className="page-content-text">
              {
                "Kevin: Votes Yes with 15 P3D for a 8 week lock period => 15 x 2 = 30 Votes"
              }
            </div>
            <div className="page-content-text">
              Even though combined both Logan and Kevin vote with more P3D than
              Peter, the lock period for both of them is less than Peter,
              leading to their voting power counting as less.
            </div>
            <div className="page-content-subtitle">Tallying</div>
            <div className="page-content-text">
              Depending on which entity proposed the proposal and whether all
              council members voted yes, there are three different scenarios. We
              can use the following table for reference.
            </div>
            <Table headers={["Entity", "Metric"]} data={tallyngData} />
            <div className="page-content-text">
              We are going to need, as well, both the following information and
              one of the formulas listed below to calculate the voting result.
              For example, let's use the public proposal as an example, so the
              Super-Majority Approve formula will be applied. There is no strict
              quorum, but the super-majority required increases with lower
              turnout.
            </div>
            <pre className="main-pre">
              {`
approve - the number of aye votes 

against - the number of nay votes 

turnout - the total number of voting tokens (does not include conviction) 

electorate - the total number of tokens issued in the network
`}
            </pre>
            <div className="page-content-subtitle">Super-Majority Approve</div>
            <div className="page-content-text">
              A positive turnout bias, whereby a heavy super-majority of aye
              votes is required to carry at low turnouts, but as turnout
              increases towards 100%, it becomes a simple majority-carries as
              below.
            </div>
            <img
              className="page-img img230"
              src="/images/form1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">Super-Majority Against</div>
            <div className="page-content-text">
              A negative turnout bias, whereby a heavy super-majority of nay
              votes is required to reject at low turnouts, but as turnout
              increases towards 100%, it becomes a simple majority-carries as
              below.
            </div>
            <img
              className="page-img img230"
              src="/images/form2.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle">Simple-Majority</div>
            <div className="page-content-text">
              Majority-carries, a simple comparison of votes; if there are more
              aye votes than nay, then the proposal is carried, no matter how
              much stake votes on the proposal.
            </div>
            <img
              className="page-img img230"
              src="/images/form3.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Follow the <Link to="https://github.com/paritytech/substrate/blob/master/frame/democracy/src/vote_threshold.rs">source code</Link> as an origin of where these formulas are
              implmented in. Example:
            </div>
            <ul className="page-content-text">
              <li>John: 500 P3D</li>
              <li>Peter: 100 P3D</li>
              <li>Lilly: 150 P3D</li>
              <li>JJ: 150 P3D</li>
              <li>Ken: 600 P3D</li>
            </ul>
            <div className="page-content-text">
              {
                "John: Votes Yes for a 4 week lock period => 500 x 1 = 500 Votes"
              }
            </div>
            <div className="page-content-text">
              {
                "Peter: Votes Yes for a 4 week lock period => 100 x 1 = 100 Votes"
              }
            </div>
            <div className="page-content-text">
              {"JJ: Votes No for a 16 week lock period => 150 x 3 = 450 Votes"}
            </div>
            <ul className="page-content-text">
              <li>approve = 600</li>
              <li>against = 450</li>
              <li>turnout = 750</li>
              <li>electorate = 1500</li>
            </ul>
            <div className="page-content-text">Thus:</div>
            <img
              className="page-img img230"
              src="/images/form4.png"
              alt="img"
              style={{ marginBottom: "50px" }}
            />
            <img
              className="page-img img230"
              src="/images/form5.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Since the above example is a public referendum, Super-Majority
              Approve would be used to calculate the result. Super-Majority
              Approve requires more aye votes to pass the referendum when
              turnout is low, therefore, based on the above result, the
              referendum will be rejected. In addition, only the winning voter's
              tokens are locked. If the voters on the losing side of the
              referendum believe that the outcome will have negative effects,
              their tokens are transferrable so they will not be locked into the
              decision. Moreover, winning proposals are autonomously enacted
              only after some enactment period.
            </div>
            <div className="page-content-subtitle">Voluntary Locking</div>
            <div className="page-content-text">
              3Dpass utilizes an idea called Voluntary Locking that allows token
              holders to increase their voting power by declaring how long they
              are willing to lock up their tokens, hence, the number of votes
              for each token holder will be calculated by the following formula:
            </div>
            <pre className="main-pre">
              {`votes = tokens * conviction_multiplier`}
            </pre>
            <div className="page-content-text">
              The conviction multiplier increases the vote multiplier by one
              every time the number of lock periods double.
            </div>
            <Table
              headers={["Lock Periods", "Vote Multiplier", "Length in Days"]}
              data={voluntaryData}
            />
            <div className="page-content-text">
              The maximum number of "doublings" of the lock period is set to 6
              (and thus 32 lock periods in total), and one lock period equals 28
              days. Only doublings are allowed; you cannot lock for, say, 24
              periods and increase your conviction by 5.5.
            </div>
            <div className="page-content-text">
              While a token is locked, you can still use it for voting and
              staking; you are only prohibited from transferring these tokens to
              another account.
            </div>
            <div className="page-content-text">
              Votes are still "counted" at the same time (at the end of the
              voting period), no matter for how long the tokens are locked.
            </div>
            <div className="page-content-subtitle">Adaptive Quorum Biasing</div>
            <div className="page-content-text">
              3Dpass leverages a concept, "Adaptive Quorum Biasing" (first
              introdused by Polkadot), which functions as a lever that the
              council can use to alter the effective super-majority required to
              make it easier or more difficult for a proposal to pass in the
              case that there is no clear majority of voting power backing it or
              against it.
            </div>
            <img
              className="page-img"
              src="/images/adaptive-quorum-biasing1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              Let's use the image above as an example.
            </div>
            <div className="page-content-text">
              If a publicly submitted referendum only has a 25% turnout, the
              tally of "aye" votes has to reach 66% for it to pass since we
              applied Positive Turnout Bias.
            </div>
            <div className="page-content-text">
              In contrast, when it has a 75% turnout, the tally of "aye" votes
              has to reach 54%, which means that the super-majority required
              decreases as the turnout increases.
            </div>
            <div className="page-content-text">
              When the council proposes a new proposal through unanimous
              consent, the referendum would be put to a vote using Negative
              Turnout Bias. In this case, it is easier to pass this proposal
              with low turnout and requires a super-majority to reject. As more
              token holders participate in voting, the bias approaches a plain
              majority carries.
            </div>
            <div className="page-content-text">
              Referring to the above image, when a referendum only has 25%
              turnout, the tally of "aye" votes has to reach 34% for it to pass.
            </div>
            <div className="page-content-text">
              In short, when the turnout rate is low, a super-majority is
              required to reject the proposal, which means a lower threshold of
              "aye" votes have to be reached, but as turnout increases towards
              100%, it becomes a simple majority.
            </div>
            <div className="page-content-text">
              All three tallying mechanisms - majority carries, super-majority
              approve, and super-majority against - equate to a simple
              majority-carries system at 100% turnout.
            </div>
            <div className="page-content-subtitle" id="how-to-fetch-referendum-result">How to fetch a Referendum result</div>
            <div className="page-content-text">
              In <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polkadot js wallet</Link> go to 
              "Developer - Chain state" and call out the <i>Democracy - referenduminfoOf(u32)</i> method. The result would look like this:
            </div>
            <pre className="main-pre">
            {`
  Finished: {
    approved: true
    end: 404,526
  }`
            }
            </pre>
            <img
              className="page-img"
              src="/images/referendum_result.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />  
          <div className="page-content-subtitle" id="how-to-get-voting-history">How to get the voting history</div>
          <div className="page-content-text">
               Explore events on the <Link to="https://3dpscan.xyz/#/events">blockchain explorer</Link> and set up a filter 
               for either the "Democracy" or "Referenda" seecton as follows:
          </div>
          <img
              className="page-img"
              src="/images/events_democracy_section.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          <div className="page-content-subtitle" id="how-to-get-detailed-voting-data">How to get detailed voting data</div>
          <div className="page-content-text">
          In order to fetch the detailed data currently involved in the voting process - votes, locked P3Ds, conviction multiplier, delegations -  call out the {" "}
           <i>Chain state - Democracy - votingOf(AccountId32: PalletDemocracyVoteVoting)</i> method:
          </div>
          <img
              className="page-img"
              src="/images/detailed_voting_data.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            </div>
          </div>
        <div className="page-content-block" id="council">
          <div className="page-content-inner">
            <div className="page-content-title">Council</div>
            <div className="page-content-text">
              The Council is an on-chain entity embracing several actors,
              whereas each one represents an on-chain account. Current 3Dpass
              Council consists of 13 accounts elected by 3Dpass community.
              </div>
            <div className="page-content-subtitle">
              Council responsibilities
            </div>
            <ol className="page-content-text">
              <li>Taking control over Treasury spendings</li>
              <li>Proposing sensible referenda</li>
              <li>Cancelling dangerous or malicious referenda</li>
              <li>Electing the Technical Committee</li>
              <li>Aproving new recognition algorithms for Proof of Scan</li>
              <li>Dealing with Validators</li>
            </ol>
            <div className="page-content-subtitle" id="referendum-proposed-by-council">
              The referendum proposed by Council
            </div>
            <div className="page-content-text">
              For a referendum to be proposed by the Council, a strict majority
              of members must be in favor, with no member exercising a veto.
              Vetoes may be exercised only once by a member for any single
              proposal; if, after a cool-down period, the proposal is
              resubmitted, they may not veto it a second time.
            </div>
            <div className="page-content-text">
              Council motions which pass with a 3/5 (60%) super-majority - but
              without reaching unanimous support - will move to a public
              referendum under a neutral, majority-carries voting scheme. In the
              case that all members of the council vote in favor of a motion,
              the vote is considered unanimous and becomes a referendum with
              negative adaptive quorum biasing.
            </div>
            <div className="page-content-subtitle">
             A referendum proposal cancelation
            </div>
            <div className="page-content-text">
              A proposal could be canceled, as long as the Technical Committee would
              unanimously agree to do so, or if Root origin (e.g. sudo)
              triggered this functionality.
            </div>
            <div className="page-content-text">
              Additionally, the two-thirds (2/3) of majority of the Council can cancel a
              referendum. This may function as a last-resort if there is an
              issue found late in the referendum proposal, such as a bug in the
              code of the runtime that the proposal would institute.
            </div>
            <div className="page-content-text">
              If the cancellation is controversial enough that the Council
              cannot exceed the two-thirds of majority, then it will be left to the
              stakeholders en masse to determine the fate of the proposal.
            </div>
            <div className="page-content-subtitle" id="council-elections">
              Council elections
            </div>
            <img
              className="page-img"
              src="/images/approval-vote1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
              All stakeholders are free to signal their approval of any of the
              registered candidates.
            </div>
            <div className="page-content-text">
              Council elections mechanism operates under <Link to="https://en.wikipedia.org/wiki/Phragmen%27s_voting_rules">Phragmén voting rules</Link>
              {" "}
              introduced by Edvard Phragmén in the 1890s, which is one of the
              most common methods leveraging in Nominated Proof of Stake (nPoS).
              Council terms last for one week.
            </div>
            <div className="page-content-text">
              At the end of each term, Phragmén election algorithm runs and the
              result will choose the new councillors based on the vote
              configurations of all voters. The election also chooses a set
              number of runners up which is currently 20 that will remain in
              the queue with their votes intact. The algorithm is implemented as
              {" "} <Link to="https://github.com/paritytech/substrate/tree/master/frame/elections-phragmen">Phragmén Election Module</Link>.
            </div>
            <div className="page-content-text">
              As opposed to a "first-past-the-post" electoral system, where
              voters can only vote for a single candidate from a list, a
              Phragmén election is a more expressive way to include each voters'
              views. Token holders can treat it as a way to support as many
              candidates as they want. The election algorithm will find a fair
              subset of the candidates that most closely matches the expressed
              indications of the electorate as a whole.
            </div>
            <div className="page-content-text">
              Let's have a look at the example below.
            </div>
            <div className="page-content-text">Round 1</div>
            <Table
              headers={["Token Holders", ".", "Candidates", ".", ".", "."]}
              data={round1Data}
            />
            <div className="page-content-text">
              The above example shows that candidate C wins the election in
              round 1, while candidates A, B, D & E keep remaining on the
              candidates' list for the next round.
            </div>
            <div className="page-content-text">Round 2</div>
            <Table
              headers={["Token Holders", ".", "Candidates", ".", ".", "."]}
              data={round2Data}
            />
            <div className="page-content-text">
              For the top-N (say 4 in this example) runners-up, they can remain
              and their votes persist until the next election. After round 2,
              even though candidates A & B get the same number of votes in this
              round, candidate A gets elected because after adding the older
              unused approvals, it is higher than B.
            </div>
            <div className="page-content-subtitle" id="prime">
            Prime member
            </div>
            <div className="page-content-text">
            The council, being an instantiation of <Link to="https://github.com/paritytech/substrate/tree/master/frame/collective">Substrate's Collective pallet</Link>, implements what's called a 
            prime member whose vote acts as the default for other members that fail to vote before the timeout.
            </div>
            <div className="page-content-text">
            The prime member is getting chosen in accordance to <Link to="https://en.wikipedia.org/wiki/Borda_count">Borda count</Link>
            </div>
            <div className="page-content-text">
            The purpose of having a prime member of the council is to ensure a quorum, even when several members 
            abstain from a vote. Council members might be tempted to vote a "soft rejection" or a "soft approval" 
            by not voting and letting the others vote. With the existence of a prime member, it forces councillors 
            to be explicit in their votes or have their vote counted for whatever is voted on by the prime.
            </div>
            <div className="page-content-subtitle" id="how-to-fetch-elections-data">
              How to fetch the actual Council election data
            </div>
            <div className="page-content-text">
            In <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polkadot js wallet</Link> go to 
              "Developer - Chain state" and call out the method <i>phragmenElection - voting(AccountId32)</i>.
            </div>
            <img
              className="page-img"
              src="/images/council_elections_data.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
             You can also leverage other methods of the <code>phragmenElection</code> pallet to get some supplementary data available on the sorage (current members, runners up, candidates, etc).
            </div>
            <div className="page-content-subtitle" id="how-to-vote">
              How to vote for a candidate
            </div>
            <div className="page-content-text">
            In <Link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc2.3dpass.org#/chainstate">Polkadot js wallet</Link> go to 
              "Governance - Council" and click on the "vote" button:
            </div>
            <img
              className="page-img"
              src="/images/council_vote_1.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-text">
            It is required to define both the voting value and the candidates you would like to support before you vote. A certain amount of funds will be locked. 
            </div>
            <img
              className="page-img"
              src="/images/council_vote_2.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
            <div className="page-content-subtitle" id="how-to-submit-candidacy">
              How to submit a candidate
            </div>
            <div className="page-content-text">
            Go to "Governance - Council" and use "Submit candidacy" button:
            </div>
            <img
              className="page-img"
              src="/images/submit_candidacy.png"
              alt="img"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>
        <div className="page-content-block" id="treasury">
          <div className="page-content-inner">
            <div className="page-content-title">Treasury</div>
            <div className="page-content-text">
              The Treasury is a pot of funds collected through either <Link to="/mainnet#validator-punishments">slashing
              Validators accounts</Link> for missbehaviour or direct donations. 3Dpass
              mainnet treasury accound is{" "}
              <Link to="https://3dpscan.xyz/#/accounts/d1EjCsWUVnKTG3dysQC2MWDfZKngtiwV2ZLegWRfFMbUR5d6c">d1EjCsWUVnKTG3dysQC2MWDfZKngtiwV2ZLegWRfFMbUR5d6c</Link>
            </div>
            <div className="page-content-text">
              The funds held in the Treasury can be spent by making a spending
              proposal that, if approved by the Council, will enter a waiting
              period before distribution. This waiting period is known as the
              spend period, and its duration is subject to governance, with the
              current default set to 24 days. The Treasury attempts to spend as
              many proposals in the queue as it can without running out of
              funds.
            </div>
            <div className="page-content-text">
              Treasury payout is an automatic process:
            </div>
            <ul className="page-content-text">
              <li>
                If the Treasury funds run out with approved proposals left to
                fund, those proposals are kept in the approved queue, and will
                receive funding in the following spend period.
              </li>
              <li>
                If the Treasury ends a spend period without spending all of its
                funds, it keeps the rest in the pot for the next payots.
              </li>
            </ul>
            <div className="page-content-text">
              When a stakeholder wishes to propose a spend from the Treasury,
              they must reserve a deposit of at least 5% of the proposed spend
              (see below for variations). This deposit will be slashed if the
              proposal is rejected, and returned if it is accepted.
            </div>
            <div className="page-content-text">
              Proposals may consist of (but are not limited to):
            </div>
            <ul className="page-content-text">
              <li>Infrastructure deployment and continued operation</li>
              <li>
                Network security operations (monitoring services, continuous
                auditing)
              </li>
              <li>
                Marketing activities (advertising, paid features,
                collaborations)
              </li>
              <li>Integrations</li>
              <li>Maintainance and Software development</li>
            </ul>
            <div className="page-content-text">
              The Council governs the Treasury and how the funds are spent is up
              to their judgment.
            </div>
            <div className="page-content-subtitle">
              Creating a Treasury proposal
            </div>
            <div className="page-content-text">
              The proposer has to deposit a minimum of 100 P3D or 5% of the
              requested amount with a maximum cap of 500 P3D as an anti-spam
              measure. This amount is burned if the proposal is rejected, or
              refunded otherwise. These values are subject to governance so they
              may change in the future.
            </div>
            <div className="page-content-text">
              Please note that there is no way for a user to revoke a treasury
              proposal after it has been submitted. The Council will either
              accept or reject the proposal, and if the proposal is rejected,
              the bonded funds are to be slashed and kept in the Treasury pot.
            </div>
            <div className="page-content-subtitle">Announcing the Proposal</div>
            <div className="page-content-text">
              To minimize storage on chain, proposals don't contain contextual
              information. Once a user decided to submit a proposal, they would
              probably need to find an off-chain way to explain the proposal.
              Most discussion takes place on the <Link to="/community#resources">following platforms</Link>.
            </div>
          </div>
        </div>
        <div className="page-content-block" id="technical">
          <div className="page-content-inner">
            <div className="page-content-title">Technical Committee</div>
            <div className="page-content-text">
              The Technical Committee (TC) is composed of the teams that have
              successfully implemented or specified 3Dpass runtime. Teams are
              added or removed from the TC by a collective decision of both 
              simple majority of the Council vote + Referendum vote.
            </div>
            <div className="page-content-text">
              The purpose of the TC is to safeguard against malicious referenda,
              implement bug fixes, reverse faulty runtime updates, or add new
              but battle-tested features. The TC has the power to fast-track
              proposals by using the Democracy pallet, and is the only origin
              that is able to trigger the fast-tracking functionality. We can
              think of the TC as a "unique origin" that cannot generate
              proposals, but are able to fast track existing proposals.
            </div>
            <div className="page-content-text">
              Fast-tracked referenda are the only type of referenda that can be
              active alongside another active referendum. Thus, with
              fast-tracked referenda it is possible to have two active
              referendums at the same time. Voting on one does not prevent a
              user from voting on the other.
            </div>
            <div className="page-content-subtitle">
              TC members
            </div>
            <ul className="page-content-text">
                <li>PaulS: <Link to="https://3dpscan.io/account/d1G1TXAfLWrAV4CH6bvFdTodp8xNeeLJEQzaAUty3XCgEiLor">d1G1TXAfLWrAV4CH6bvFdTodp8xNeeLJEQzaAUty3XCgEiLor</Link></li>
                <li>Mikhail: <Link to="https://3dpscan.io/account/d1CVafcqJ71h94V5Evf85TpRqn5Grcw1vni6TwWGokRiYSGoG">d1CVafcqJ71h94V5Evf85TpRqn5Grcw1vni6TwWGokRiYSGoG</Link></li>
                <li>Michael Co: <Link to="https://3dpscan.io/account/d1FSXz2PUvULgekcwXug3yF3WLeDZxou6GouVrWzZf5Jq41ZP">d1FSXz2PUvULgekcwXug3yF3WLeDZxou6GouVrWzZf5Jq41ZP</Link></li>
              </ul>
            </div>
          </div>
        <div className="page-content-block" id="fellowship">
          <div className="page-content-inner">
            <div className="page-content-title">Fellowship</div>
            <div className="page-content-text">
              The Fellowship is a mostly self-governing expert body with a
              primary goal of representing humans who embody and contain the
              technical knowledge base of 3Dpass network and protocols. This is
              accomplished by associating a rank with members to categorize the
              degree to which the system expects their opinion to be
              well-informed, of a sound technical basis and in line with the
              interests of 3Dpass.
            </div>
            <div className="page-content-text">
              Unlike the Technical Committee, it is designed to be far broader
              in membership (i.e. to work well with even tens of thousands of
              members) and with far lower barrier to entry (both in terms of
              administrative process flow and expectations of expertise).
              Becoming a candidate member in the Fellowship is as easy as
              placing a small deposit.
            </div>
            <div className="page-content-subtitle">Ranking System</div>
            <div className="page-content-text">
              In order to prevent a small group of participants from gaining
              effective control over the network, this system will adhere to
              three main principles:
            </div>
            <ol className="page-content-text">
              <li>
                The Fellowship must never have hard power over the network: it
                cannot change the parameters, conduct rescues or move assets.
                Their only power in governance resides in the ability to reduce
                the effective timeline on which a referendum takes place.
              </li>
              <li>
                The Fellowship weights those with a higher rank more in the
                aggregate opinion, however the weight should not be so high as
                to make a small number of higher members’ opinions be
                insurmountable when compared to a coherent opinion coming from
                lower-ranked membership.
              </li>
              <li>
                The Fellowship should be designed to grow and develop its
                membership and their aggregate levels of expertise and in doing
                so ensure that its overall decision-making capacity gets
                stronger over time.
              </li>
            </ol>
            <div className="page-content-text">
              To support these conditions, the Fellowship will have a
              constitution which outlines the requirements and expectations for
              individuals to attain and retain any given rank. Higher ranks are
              able to vote and promote lower ranks based on this constitution.
            </div>
            <div className="page-content-text">
              Demotion occurs automatically after a given period has elapsed and
              the member is unable to defend their position to their peers.
            </div>
            <div className="page-content-text">
              Suspension can happen only through general referendum, which
              ensures that the Fellowship's bias alone does not necessarily
              result in expulsion.
            </div>
            <div className="page-content-text">
              In order to prevent the Fellowship from becoming a cabal
              (popularity with Fellowship peers alone should not be enough to
              gain access to a top rank), gaining access to top tiers of the
              ranks will require a referendum.
            </div>
            <div className="page-content-subtitle">Whitelisting</div>
            <div className="page-content-text">
              The Whitelist pallet does one thing: it allows one Origin to
              escalate the privilege level of another Origin for a certain
              operation.
            </div>
            <div className="page-content-text">
              It allows for the Fellowship to authorise a new origin (known as
              Whitelisted-Root) to be executed with Root-level privileges and
              will only work with certain specified commands that have been
              authorised by the Fellowship. The Whitelist pallet verifies two
              things:
            </div>
            <ol className="page-content-text">
              <li>
                The origin really is the Whitelisted-Root (i.e. that the
                referendum passed on this track)
              </li>
              <li>
                The proposal has indeed been whitelisted by the Fellowship.
              </li>
            </ol>
            <div className="page-content-text">
              If both conditions are true, the operation executes with
              Root-level privileges.
            </div>
            <div className="page-content-text">
              This system enables the ability to have a new parallel Track
              (Whitelisted-Root Origin), whose parameters allow for a shorter
              voting turnaround. Through an open and transparent process, a body
              of global experts on 3Dpass have determined that the action is
              both safe and time-critical.
            </div>
            <div className="page-content-subtitle">Blacklisting</div>
            <div className="page-content-text">
              A proposal can be blacklisted by Root origin (e.g. sudo). A
              blacklisted proposal and its related referendum (if any) are
              immediately canceled. Additionally, a blacklisted proposal's hash
              cannot re-appear in the proposal queue. Blacklisting is useful
              when removing erroneous proposals that could be submitted with the
              same hash.
            </div>
            <div className="page-content-text">
              Upon seeing their proposal removed, a submitter who is not
              properly introduced to the democracy system of 3Dpass might be
              tempted to re-submit the same proposal. That said, this is far
              from a fool-proof method of preventing invalid proposals from
              being submitted - a single changed character in a proposal's text
              will also change the hash of the proposal, rendering the per-hash
              blacklist invalid.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Governance;
