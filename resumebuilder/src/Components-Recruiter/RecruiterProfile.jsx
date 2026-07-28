import React from "react";
import "./RecruiterProfile.css";
import BlueDot from "../assets/recruiter/RecruiterProfile-BlueDot.png";
import TwoFactorIcon from "../assets/recruiter/RecruiterProfile-TwoFactAuth.png";
import EnabledIcon from "../assets/recruiter/RecruiterProfile-Enabled.png";
import ChangePasswordIcon from "../assets/recruiter/RecruiterProfile-ChangePassword.png";
import LoginHistoryIcon from "../assets/recruiter/RecruiterProfile-LoginHistory.png";
import DeviceManagementIcon from "../assets/recruiter/RecruiterProfile-DeviceManagement.png";
import NotificationIcon from "../assets/recruiter/RecruiterProfile-Notification.png";
import ArrowIcon from "../assets/recruiter/RecruiterProfile-Arrow.png";
import VerificationCert from "../assets/recruiter/RecruiterProfile-VerificationCert.png";
import AuthLetter from "../assets/recruiter/RecruiterProfile-AuthLetter.png";
import IDCard from "../assets/recruiter/RecruiterProfile-ID card.png";

const activities = [
  {
    id: 1,
    title: "Created new job post - full Stack Developer",
    time: "Today, 10:30 AM",
  },
  {
    id: 2,
    title: "Screened 35 candidates for Data Engineer role",
    time: "Today, 09:15 AM",
  },
  {
    id: 3,
    title: "Shortlisted 8 candidates for Product Manager role",
    time: "Yesterday, 04:20 PM",
  },
  {
    id: 4,
    title: "Scheduled interview with Anjali Mehta",
    time: "Yesterday, 11:40 AM",
  },
  {
    id: 5,
    title: "Generated recruitment report - May 2025",
    time: "20 May 2025, 06:30 PM",
  },
];

const RecruiterProfile = () => {
  return (
    <div className="recruiter-profile-container">
      <div className="recruiter-profile-wrapper">
        
        {/* Recent Activity Card */}
        <div className="recent-activity-card">
          <h2 className="recent-activity-title">Recent Activity</h2>

          <div className="recent-activity-content">
            <div className="timeline-wrapper"></div>

            <div className="activity-list">
              {activities.map((activity) => (
                <div className="activity-item" key={activity.id}>
                  <div className="activity-header">
                    <img
                      src={BlueDot}
                      alt="Dot"
                      className="timeline-dot"
                    />
                    <h4>{activity.title}</h4>
                  </div>
                  <p>{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Account Settings Card */}
        <div className="security-card">
          <h2 className="security-title">
            Security &amp; Account Settings
          </h2>

          <div className="security-list">

            {/* Two Factor Authentication */}
            <div className="security-item">
              <div className="security-left">
                <img
                  src={TwoFactorIcon}
                  alt="Two Factor Authentication"
                  className="security-icon"
                />
                <span className="security-text">
                  Two - Factor Authentication
                </span>
              </div>

              <img
                src={EnabledIcon}
                alt="Enabled"
                className="enabled-badge"
              />
            </div>

            {/* Change Password */}
            <div className="security-item">
              <div className="security-left">
                <img
                  src={ChangePasswordIcon}
                  alt="Change Password"
                  className="security-icon"
                />
                <span className="security-text">
                  Change Password
                </span>
              </div>

              <img
                src={ArrowIcon}
                alt="Arrow"
                className="arrow-icon"
              />
            </div>

            {/* Login History */}
            <div className="security-item">
              <div className="security-left">
                <img
                  src={LoginHistoryIcon}
                  alt="Login History"
                  className="security-icon"
                />
                <span className="security-text">
                  Login History
                </span>
              </div>

              <img
                src={ArrowIcon}
                alt="Arrow"
                className="arrow-icon"
              />
            </div>

            {/* Device Management */}
            <div className="security-item">
              <div className="security-left">
                <img
                  src={DeviceManagementIcon}
                  alt="Device Management"
                  className="security-icon"
                />
                <span className="security-text">
                  Device Management
                </span>
              </div>

              <div className="security-right">
                <span className="active-device-text">
                  3 Active Devices
                </span>
                <img
                  src={ArrowIcon}
                  alt="Arrow"
                  className="arrow-icon"
                />
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="security-item">
              <div className="security-left">
                <img
                  src={NotificationIcon}
                  alt="Notification Preferences"
                  className="security-icon"
                />
                <span className="security-text">
                  Notification Preferences
                </span>
              </div>

              <img
                src={ArrowIcon}
                alt="Arrow"
                className="arrow-icon"
              />
            </div>

          </div>
        </div>

        {/* Documents Card */}
        <div className="documents-card">
          <h2 className="documents-title">Documents</h2>

          <div className="documents-list">

            {/* Document Item 1 */}
            <div className="document-item">
              <div className="document-left">
                <div className="document-icon-box">
                  <img
                    src={VerificationCert}
                    alt="Verification Certificate"
                    className="document-icon"
                  />
                </div>

                <div className="document-info">
                  <h4>Company Verification Certificate</h4>
                  <span>Uploaded on 10 Jan 2024</span>
                </div>
              </div>
            </div>

            {/* Document Item 2 */}
            <div className="document-item">
              <div className="document-left">
                <div className="document-icon-box">
                  <img
                    src={AuthLetter}
                    alt="Authorization Letter"
                    className="document-icon"
                  />
                </div>

                <div className="document-info">
                  <h4>HR Authorization Letter</h4>
                  <span>Uploaded on 10 Jan 2024</span>
                </div>
              </div>
            </div>

            {/* Document Item 3 */}
            <div className="document-item">
              <div className="document-left">
                <div className="document-icon-box">
                  <img
                    src={IDCard}
                    alt="ID Card"
                    className="document-icon"
                  />
                </div>

                <div className="document-info">
                  <h4>Recruiter ID Card</h4>
                  <span>Uploaded on 10 Jan 2024</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RecruiterProfile;