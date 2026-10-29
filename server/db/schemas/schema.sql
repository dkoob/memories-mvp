CREATE TABLE experiences (
    experience_id SERIAL PRIMARY KEY,

    experience_name TEXT NOT NULL,
    experience_description TEXT NOT NULL,

    experienced_at DATE,

    experience_tags TEXT[] NOT NULL DEFAULT '{}',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)