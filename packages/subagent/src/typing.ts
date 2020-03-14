export const SizeRegex = /^SIZE\s+(\d+)$/;
export const AuthRegex = /^AUTH\s+(.+)$/;
export enum AUTH_ASKING {
  USERNAME = "VXNlcm5hbWU6", // Asking Username
  PASSWORD = "UGFzc3dvcmQ6" // Asking Password
}
export enum T {
  ATRN = "ATRN",
  AUTH = "AUTH",
  BINARYMIME = "BINARYMIME",
  CHECKPOINT = "CHECKPOINT",
  CHUNKING = "CHUNKING",
  CONNEG = "CONNEG",
  CONPERM = "CONPERM",
  DELIVERBY = "DELIVERBY",
  DSN = "DSN",
  EIGHT_BITMIME = "8BITMIME",
  ENHANCED_STATUS_CODES = "ENHANCEDSTATUSCODES",
  ETRN = "ETRN",
  MTRK = "MTRK",
  NO_SOLICITING = "NO-SOLICITING",
  PIPELINING = "PIPELINING",
  SIZE = "SIZE",
  SMTPUTF8 = "SMTPUTF8",
  STARTTLS = "STARTTLS"
}
export enum COMMAND {
  HELO = "HELO",
  EHLO = "EHLO",
  LHLO = "LHLO",
  MAIL = "MAIL",
  RCPT = "RCPT",
  DATA = "DATA"
}

const COMMAND_STATUS = {
  220: "220",
  235: "235",
  250: "250",
  334: "334",
  501: "501",
  530: "530",
  550: "550",
  554: "554"
};
export const RESPONSE_CODES = COMMAND_STATUS;

export enum MAIL_SEND_RESPONSE_STATUS {
  OK = "OK",
  FAIL = "FAIL",
  BOUNCE = "BOUNCE"
}
