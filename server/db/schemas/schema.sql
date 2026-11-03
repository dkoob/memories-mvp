CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,

    user_firstname VARCHAR(50) NOT NULL,
    user_lastname VARCHAR(50) NOT NULL,

    user_username VARCHAR(20) UNIQUE NOT NULL,
    user_password_hash TEXT NOT NULL,

    user_verification_token TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE experiences (
    experience_id SERIAL PRIMARY KEY,

    experience_name TEXT NOT NULL,
    experience_description TEXT NOT NULL,

    experienced_at DATE,

    experience_tags TEXT[] NOT NULL DEFAULT '{}',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)