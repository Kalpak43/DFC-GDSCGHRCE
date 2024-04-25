import React from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AttendeeCertificate() {
  let { refID } = useParams();

  //   https://script.google.com/macros/s/AKfycbwczki6CIkcEtFZU-zJkl9syPB0yB594KlfMfXFstDLpNoXzDLmz2fKV4iSBEAP56F7yw/exec?Reference=

  const [fetchedData, setFetchedData] = useState([]);
  const [fetched, setFetched] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://script.google.com/macros/s/AKfycbwczki6CIkcEtFZU-zJkl9syPB0yB594KlfMfXFstDLpNoXzDLmz2fKV4iSBEAP56F7yw/exec?Reference=${refID}`
      );

      setFetched((x) => x + 1);

      setFetchedData((x) => [...x, ...data]);
    };

    getData();
  }, []);

  return (
    // <div>{fetched > 0 ? fetchedData[0].ID : "Loading..."}</div>
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      {fetched > 0 ? (
        <>
          <p className="text-center text-2xl">
            Thank you for attending{" "}
            <span id="logo" className="logo-2 text-4xl">
              Techotsav
            </span>
          </p>
          <div className="py-4 md:text-xl">
            <table className="border-2 border-[var(--txt-clr)]">
              <tbody>
                <tr className="border-2 border-[var(--txt-clr)]">
                  <th className="p-2 px-6 border-r-2 border-[var(--txt-clr)]">
                    Reference ID
                  </th>
                  <td className="p-2 px-6">{fetchedData[0].ID}</td>
                </tr>
                <tr className="border-2 border-[var(--txt-clr)]">
                  <th className="p-2 px-6 border-r-2 border-[var(--txt-clr)]">
                    Attendee Name
                  </th>
                  <td className="p-2 px-6">{fetchedData[0].Name}</td>
                </tr>
                <tr className="border-2 border-[var(--txt-clr)]">
                  <th className="p-2 px-6 border-r-2 border-[var(--txt-clr)]">
                    Date of Event
                  </th>
                  <td className="p-2 px-6">{fetchedData[0].DOI.substring(0, 10)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="my-2 text-center">
            Thank you for attending the event. We hope you had a great time. We
            look forward to seeing you in our future events.
          </p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
