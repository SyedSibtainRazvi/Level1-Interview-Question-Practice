import React, { useEffect, useState } from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { useHistory } from "react-router-dom";
function EmailList() {
  const [mail, setMail] = useState([]);
  const [tempMail, settempMail] = useState([]);
  const history = useHistory();
  useEffect(() => {
    filterMails();
  }, []);

  useEffect(() => {
    history.listen(() => {
      filterMails();
    });
  }, [history]);

  const filterMails = () => {
    var hash = window.location.hash.split("=");
    if (hash[0] == "#tag") {
      var tag = hash[1];
    } else if (hash[0] == "#search") {
      var search = decodeURI(hash[1]);
    }
    fetch("https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98")
      .then((response) => response.json())
      .then((data) => {
        settempMail(data);
        console.log(data);
        if (tag) {
          if (tag != "all") {
            var filteredData = data.filter((data) => {
              return data.tag == tag;
            });
            setMail(filteredData);
          } else {
            setMail(data);
          }
        } else if (search) {
          var searchData = data.filter((item) => {
            const itemData = `${item.body.toUpperCase()}`;
            const textData = search.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setMail(searchData);
        } else {
          setMail(data);
        }
      });
  };

  return (
    <div className="emailList">
      {mail.map((data) => (
        <EmailRow
          subject={data.subject}
          key={data.id}
          id={data.id}
          body={data.body}
        />
      ))}
    </div>
  );
}

export default EmailList;
