import { h } from "preact";

export const Preview = ({ data }) => (
  <div class="sign">
    <div id="ap">
      <hr />
      Aperçu de la signature :
    </div>
    <div id="signature">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td align="left" valign="top" style="padding-right: 10px; ">
              <a href="https://sfeir.com/" title="SFEIR">
                <img
                  id="ls"
                  alt="Logo"
                  style=" padding: 0; border: 0;"
                  src="https://weare.sfeir.com/wp-content/uploads/2017/06/logo_sfeir_clean.png"
                />
              </a>
            </td>
            <td
              width="100%"
              align="left"
              valign="top"
              style="padding: 2px 0 8px 0; font-family: Arial; font-size: 10px;line-height: 12px; color: grey; "
            >
              <span style="color: #105394;font-weight: bold;">
                {data.prenom} {data.message}
              </span>
              {data.poste && (
                <span style="color: #e75112;"> - {data.poste}</span>
              )}
              <br />
              <span>{data.ville}</span>
              <br />
              <span style="font-family: Trebuchet MS, Sans-Serif;font-weight: bold;margin-top:  2px;">
                <a href={`tel:${data.phone}`}>{data.phone}</a>
                {data.phone2 && (
                  <span>
                    {" - "}
                    <a href={`tel:${data.phone2}`}>{data.phone2}</a>
                  </span>
                )}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
