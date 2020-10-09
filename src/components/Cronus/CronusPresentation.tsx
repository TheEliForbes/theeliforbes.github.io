import { FontIcon } from "@fluentui/react";
import React, { useState } from "react";
import AnchorTag from "../Misc/AnchorTag";
import GitHubLogo from "../Misc/GitHubLogo";

interface Props {}

const CronusPresentation = (props: Props) => {
  const [page, setPage] = useState(0);
  const title = "Cronus Monitoring";
  const subtitles = [
    "Overview",
    "Architecture",
    "Development",
    "System Metrics",
    "Application Metrics",
    "Alerting",
    "Repository",
    "Resources",
  ];
  const overview = (
    <>
      <p>
        Cronus Monitoring is a distributed application capable of quick deployment to Kubernetes Clusters, which
        aggregates Kubernetes, System, and Application metrics into a Time Series Database, and enables visualization
        and customizable alerting on such metrics.
      </p>
      The architecture is made up of multiple main components with varying purposes:
      <div className={"card-content-flex"}>
        <ul>
          <li>Data Ingestion</li>
          <ul>
            <li>Kube-State-Metrics</li>
            <li>Telegraf</li>
          </ul>
          <li>Data Storage</li>
          <ul>
            <li>InfluxDB</li>
          </ul>
          <li>{"Alerting & Data Aggregation"}</li>
          <ul>
            <li>Kapacitor</li>
          </ul>
          <li>Visualization</li>
          <ul>
            <li>Grafana</li>
          </ul>
        </ul>
        <img
          src="/cronus/BasicInterfaceGraphic.png"
          alt="Basic Interface Graphic"
          className={"card-image basic-interface-graphic"}
        />
      </div>
    </>
  );
  const architecture = (
    <>
      <p>
        The following is a more detailed diagram which contains each component's purpose, and depicts the flow of data
        throughout the system.
      </p>
      <img src="/cronus/InterfaceGraphic.bmp" alt="Interface Graphic" className={"card-image"} />
    </>
  );
  const development = (
    <>
      <p>
        Various pieces of software were utilized during development of the stack, each with their own particular
        purpose.
      </p>
      <div className={"card-content-flex"}>
        <ul>
          <li>Deployment</li>
          <ul>
            <li>Helm</li>
          </ul>
          <li>CI/CD</li>
          <ul>
            <li>Jenkins</li>
          </ul>
          <li>Unit Testing</li>
          <ul>
            <li>Kapacitor-Unit</li>
            <li>Helm Unit-Test</li>
          </ul>
          <li>Integration Testing</li>
          <ul>
            <li>Helm Test</li>
          </ul>

          <li>Functional Testing</li>
          <ul>
            <li>Selenium Webdriver</li>
          </ul>
          <li>Performance Testing</li>
          <ul>
            <li>Siege</li>
          </ul>
          <li>Environment Hosting</li>
          <ul>
            <li>Skytap Cloud</li>
          </ul>
        </ul>
        <img src="/cronus/DevelopmentTech.png" alt="Basic Interface Graphic" className={"card-image width-40"} />
      </div>
    </>
  );
  const systemMetrics = (
    <>
      <p>
        Many system metrics are gathered via Telegraf, such as CPU, Memory, Disk, I/O Wait, and more! The following is
        an example dashboard containing some of the system metrics gathered from a particular node in the Kubernetes
        cluster.
      </p>
      <img src="/cronus/SystemMetrics.png" alt="System Metrics" className={"card-image width-70"} />
    </>
  );
  const appMetrics = (
    <>
      <p>
        Telegraf can gather various application metrics depending on the given configuration. The following dashboard
        shows HTTP Response metrics from an example application deployed in the Kubernetes cluster alongside the
        monitoring stack.
      </p>
      <img src="/cronus/AppMetrics.png" alt="App Metrics" className={"card-image"} />
    </>
  );
  const alerting = (
    <>
      <p>
        Kapacitor has the ability to configure many different alerts, integrate with various other chat bots, and even
        aggregate and store data back in InfluxDB! Below are several examples of alerts that were configured through
        Kapacitor, and sent to a chat bot in Slack.
      </p>
      <img src="/cronus/KapacitorAlerts.png" alt="Kapacitor Alerts" className={"card-image width-70"} />
    </>
  );
  const repository = (
    <>
      <p>If you would like to check out the code, it's available at the repository given below!</p>
      <div style={{ display: "flex", alignSelf: "center", margin: "auto" }}>
        <AnchorTag href={"https://github.com/TheEliForbes/cronus-monitoring"} className={"resource-link"}>
          <GitHubLogo className={"repo-link"} title={"Cronus Monitoring Repository"} />
        </AnchorTag>
      </div>
    </>
  );
  const resourceValues = [
    { href: "https://github.com/kubernetes/kube-state-metrics", text: "Kube-State-Metrics" },
    { href: "https://www.influxdata.com/time-series-platform/telegraf/", text: "Telegraf" },
    { href: "https://www.influxdata.com/products/influxdb-overview/", text: "InfluxDB" },
    { href: "https://www.influxdata.com/time-series-platform/kapacitor/", text: "Kapacitor" },
    { href: "https://grafana.com/", text: "Grafana" },
  ];
  const resources = (
    <>
      <p>
        Feel free to also check out each of the components individually! There have most likely been updates since
        project completion, so each component could now have even more to offer!
      </p>
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
        {resourceValues.map((value) => (
          <AnchorTag href={value.href} className={"resource-link"}>
            {value.text}
          </AnchorTag>
        ))}
      </div>
    </>
  );
  const content = [overview, architecture, development, systemMetrics, appMetrics, alerting, repository, resources];
  return (
    <>
      <div className="card">
        <div className={"terminal"}>
          <div className={"terminal-nav-container"}>
            {`${title} | ${subtitles[page]}`}
            <div className={"terminal-nav"}>
              <span className={"terminal-nav-item"} />
              <span className={"terminal-nav-item"} />
              <span className={"terminal-nav-item"} />
            </div>
          </div>
          <div className={"terminal-content"}>
            <div className={"terminal-content-text"}>{content[page]}</div>
          </div>
        </div>
      </div>
      <div className={"page-switch-icons"}>
        <span
          className={page === 0 ? "page-switch-icon disabled" : "page-switch-icon"}
          onClick={() => {
            if (page !== 0) setPage(page - 1);
          }}
        >
          <FontIcon iconName={"DoubleChevronLeft8"} />
        </span>
        <span
          className={page === content.length - 1 ? "page-switch-icon disabled" : "page-switch-icon"}
          onClick={() => {
            if (page !== content.length - 1) setPage(page + 1);
          }}
        >
          <FontIcon iconName={"DoubleChevronRight8"} />
        </span>
      </div>
    </>
  );
};

export default CronusPresentation;
